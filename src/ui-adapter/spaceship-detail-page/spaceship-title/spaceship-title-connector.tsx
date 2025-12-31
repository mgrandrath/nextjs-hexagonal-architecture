"use client";

import type { FC } from "react";
import { useSpaceshipDetailPageStore } from "../spaceship-detail-page-store-provider";
import { selectSpaceship } from "../spaceship-detail-page-store";
import { SpaceshipTitle } from "./spaceship-title";

export const SpaceshipTitleConnector: FC = () => {
  const spaceship = useSpaceshipDetailPageStore(selectSpaceship);

  return <SpaceshipTitle spaceship={spaceship} />;
};
