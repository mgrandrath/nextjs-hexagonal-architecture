"use client";

import type { FC } from "react";
import { useSpaceshipDetailPageStore } from "../spaceship-detail-page-store-provider";
import { selectSpaceshipAvailability } from "../spaceship-detail-page-store";
import { SpaceshipAvailability } from "./spaceship-availability";

export const SpaceshipAvailabilityConnector: FC = () => {
  const spaceshipAvailability = useSpaceshipDetailPageStore(
    selectSpaceshipAvailability,
  );

  return <SpaceshipAvailability availability={spaceshipAvailability} />;
};
