import type { FC } from "react";
import { SpaceshipDetailsConnector } from "./spaceship-details/spaceship-details-connector";

export const SpaceshipDetailPage: FC = () => {
  return (
    <div>
      <h1>Spaceship Detail Page</h1>
      <SpaceshipDetailsConnector />
    </div>
  );
};
