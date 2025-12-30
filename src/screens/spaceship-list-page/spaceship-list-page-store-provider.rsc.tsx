import type { FC, PropsWithChildren } from "react";
import { SpaceshipListPageStoreProvider } from "./spaceship-list-page-store-provider";
import { fetchSpaceships } from "@/spaceship-api-adapter/spaceship-api";
import { headers } from "next/headers";

export const SpaceshipListPageStoreProviderRSC: FC<PropsWithChildren> = async ({
  children,
}) => {
  const requestHeaders = await headers();
  const origin = `http://${requestHeaders.get("host") ?? "localhost"}`;

  const { spaceships } = await fetchSpaceships({ fetch: global.fetch, origin })(
    {
      offset: 0,
      limit: 5,
    },
  );

  return (
    <SpaceshipListPageStoreProvider initialValues={{ spaceships }}>
      {children}
    </SpaceshipListPageStoreProvider>
  );
};
