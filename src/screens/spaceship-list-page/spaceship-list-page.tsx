import type { FC } from "react";
import { SpaceshipListConnector } from "./spaceship-list/spaceship-list-connector";
import { LoadMoreSpaceshipsButtonConnector } from "./load-more-spaceships-button/load-more-spaceships-button-connector";

export const SpaceshipListPage: FC = () => {
  return (
    <div>
      <h1>Spaceships</h1>
      <SpaceshipListConnector />
      <LoadMoreSpaceshipsButtonConnector />
    </div>
  );
};
