import type { FC } from "react";
import Link from "next/link";
import { SpaceshipDetailsConnector } from "./spaceship-details/spaceship-details-connector";
import { SpaceshipImageConnector } from "./spaceship-image/spaceship-image-connector";
import { SpaceshipTitleConnector } from "./spaceship-title/spaceship-title-connector";
import { SpaceshipAvailabilityConnector } from "./spaceship-availability/spaceship-availability-connector";
import { OnPageLoadConnector } from "./on-page-load/on-page-load-connector";

export const SpaceshipDetailPage: FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <OnPageLoadConnector />
      <Link href="/spaceships" className="block mb-4 text-blue-800 underline">
        ← Back to the ships
      </Link>
      <SpaceshipTitleConnector />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <SpaceshipImageConnector />
        </div>
        <div className="flex-1 min-w-0">
          <SpaceshipAvailabilityConnector />
          <SpaceshipDetailsConnector />
        </div>
      </div>
    </div>
  );
};
