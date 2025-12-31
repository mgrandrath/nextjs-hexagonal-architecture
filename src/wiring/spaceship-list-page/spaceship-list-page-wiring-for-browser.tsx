"use client";

import type { FC, PropsWithChildren } from "react";
import { createSpaceshipListPageWiringForBrowser } from "./create-spaceship-list-page-wiring-for-browser";
import { SpaceshipListPageBrowserWiringProvider } from "@/ui-adapter/spaceship-list-page/spaceship-list-page-browser-wiring-provider";

export const SpaceshipListPageWiringForBrowser: FC<PropsWithChildren> = ({
  children,
}) => {
  const browserWiring = createSpaceshipListPageWiringForBrowser();

  return (
    <SpaceshipListPageBrowserWiringProvider browserWiring={browserWiring}>
      {children}
    </SpaceshipListPageBrowserWiringProvider>
  );
};
