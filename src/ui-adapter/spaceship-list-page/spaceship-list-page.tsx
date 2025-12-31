import type { FC } from "react";
import { SpaceshipListConnector } from "./spaceship-list/spaceship-list-connector";
import { LoadMoreSpaceshipsButtonConnector } from "./load-more-spaceships-button/load-more-spaceships-button-connector";

export const SpaceshipListPage: FC = () => {
  return (
    <div className="p-4">
      <SpaceshipListConnector />
      <div className="mt-4 text-center">
        <LoadMoreSpaceshipsButtonConnector />
      </div>
    </div>
  );
};
