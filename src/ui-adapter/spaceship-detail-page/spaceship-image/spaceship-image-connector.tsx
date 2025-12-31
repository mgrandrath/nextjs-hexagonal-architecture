"use client";

import type { FC } from "react";
import { useSpaceshipDetailPageStore } from "../spaceship-detail-page-store-provider";
import { selectSpaceship } from "../spaceship-detail-page-store";
import { SpaceshipImage } from "./spaceship-image";

export const SpaceshipImageConnector: FC = () => {
  const spaceship = useSpaceshipDetailPageStore(selectSpaceship);

  return <SpaceshipImage spaceship={spaceship} />;
};
