import type { FC, PropsWithChildren } from "react";
import { SpaceshipDetailPageStoreProvider } from "./spaceship-detail-page-store-provider";
import type { SpaceshipDetailPageServerPortCollection } from "./spaceship-detail-page-server-port-collection";
import { notFound } from "next/navigation";

type SpaceshipDetailPageStoreProviderRSCProps = PropsWithChildren<{
  serverWiring: SpaceshipDetailPageServerPortCollection;
  spaceshipId: string;
}>;

export const SpaceshipDetailPageStoreProviderRSC: FC<
  SpaceshipDetailPageStoreProviderRSCProps
> = async ({ serverWiring, spaceshipId, children }) => {
  const { spaceship } = await serverWiring.fetchSpaceship({ spaceshipId });
  if (!spaceship) {
    notFound();
  }

  return (
    <SpaceshipDetailPageStoreProvider initialValues={{ spaceship }}>
      {children}
    </SpaceshipDetailPageStoreProvider>
  );
};
