import type { FC } from "react";
import { SpaceshipDetailsConnector } from "./spaceship-details/spaceship-details-connector";
import { SpaceshipImageConnector } from "./spaceship-image/spaceship-image-connector";
import { SpaceshipTitleConnector } from "./spaceship-title/spaceship-title-connector";

export const SpaceshipDetailPage: FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <SpaceshipTitleConnector />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <SpaceshipImageConnector />
        </div>
        <div className="flex-1 min-w-0">
          <SpaceshipDetailsConnector />
        </div>
      </div>
    </div>
  );
};
