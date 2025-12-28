"use client";

import type { FC } from "react";
import { useSpaceshipListPageStore } from "../spaceship-list-page-store-provider";
import { selectSpaceships } from "../spaceship-list-page-store";
import { SpaceshipList } from "./spaceship-list";

export const SpaceshipListConnector: FC = () => {
  const spaceships = useSpaceshipListPageStore(selectSpaceships);

  return <SpaceshipList spaceships={spaceships} />;
};
