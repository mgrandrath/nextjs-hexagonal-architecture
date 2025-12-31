"use client";

import type { FC } from "react";
import { useSpaceshipDetailPageStore } from "../spaceship-detail-page-store-provider";
import { selectSpaceship } from "../spaceship-detail-page-store";
import { SpaceshipDetails } from "./spaceship-details";

export const SpaceshipDetailsConnector: FC = () => {
  const spaceship = useSpaceshipDetailPageStore(selectSpaceship);

  return <SpaceshipDetails spaceship={spaceship} />;
};
