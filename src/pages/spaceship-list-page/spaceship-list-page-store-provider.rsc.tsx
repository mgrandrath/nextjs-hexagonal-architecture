import type { FC, PropsWithChildren } from "react";
import type { Spaceship } from "@/core/spaceship";
import { createSpaceship } from "@/test-helpers/factories";
import { SpaceshipListPageStoreProvider } from "./spaceship-list-page-store-provider";

const spaceships: Spaceship[] = [createSpaceship({ name: "The Void Razor" })];

export const SpaceshipListPageStoreProviderRSC: FC<PropsWithChildren> = async ({
  children,
}) => {
  return (
    <SpaceshipListPageStoreProvider initialValues={{ spaceships }}>
      {children}
    </SpaceshipListPageStoreProvider>
  );
};
