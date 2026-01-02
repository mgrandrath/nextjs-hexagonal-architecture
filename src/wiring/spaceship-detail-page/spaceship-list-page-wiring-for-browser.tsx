"use client";

import type { FC, PropsWithChildren } from "react";
import { createSpaceshipDetailPageWiringForBrowser } from "./create-spaceship-detail-page-wiring-for-browser";
import { SpaceshipDetailPageBrowserWiringProvider } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-browser-wiring-provider";

export const SpaceshipDetailPageWiringForBrowser: FC<PropsWithChildren> = ({
  children,
}) => {
  const browserWiring = createSpaceshipDetailPageWiringForBrowser();

  return (
    <SpaceshipDetailPageBrowserWiringProvider browserWiring={browserWiring}>
      {children}
    </SpaceshipDetailPageBrowserWiringProvider>
  );
};
