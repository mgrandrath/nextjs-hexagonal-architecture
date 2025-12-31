import type { FC, PropsWithChildren } from "react";
import { SpaceshipListPageStoreProvider } from "./spaceship-list-page-store-provider";
import type { SpaceshipListPageServerPortCollection } from "./spaceship-list-page-server-port-collection";

type SpaceshipListPageStoreProviderRSCProps = PropsWithChildren<{
  serverWiring: SpaceshipListPageServerPortCollection;
}>;

export const SpaceshipListPageStoreProviderRSC: FC<
  SpaceshipListPageStoreProviderRSCProps
> = async ({ children, serverWiring }) => {
  const { spaceships } = await serverWiring.fetchSpaceships({
    offset: 0,
    limit: 5,
  });

  return (
    <SpaceshipListPageStoreProvider initialValues={{ spaceships }}>
      {children}
    </SpaceshipListPageStoreProvider>
  );
};
