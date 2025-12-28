import type { FC } from "react";
import { SpaceshipListConnector } from "./spaceship-list/spaceship-list-connector";

export const SpaceshipListPage: FC = () => {
  return (
    <div>
      <h1>Spaceships</h1>
      <SpaceshipListConnector />
    </div>
  );
};
