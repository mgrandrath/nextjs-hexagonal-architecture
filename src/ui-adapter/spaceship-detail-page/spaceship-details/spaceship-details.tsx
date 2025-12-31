import type { FC } from "react";
import type { Spaceship } from "@/core/spaceship";

export type SpaceshipDetailsProps = {
  spaceship: Spaceship;
};

export const SpaceshipDetails: FC<SpaceshipDetailsProps> = ({ spaceship }) => {
  return (
    <dl className="grid grid-cols-[1fr_2fr] gap-x-2 gap-y-2 text-sm">
      <dt className="font-bold text-blue-800">Role:</dt>
      <dd>{spaceship.role}</dd>

      <dt className="font-bold text-blue-800">Length:</dt>
      <dd>{spaceship.lengthMeters} meters</dd>

      <dt className="font-bold text-blue-800">Crew Count:</dt>
      <dd>{spaceship.crewCount}</dd>

      <dt className="font-bold text-blue-800">Propulsion:</dt>
      <dd>{spaceship.propulsion}</dd>

      <dt className="font-bold text-blue-800">Armament:</dt>
      <dd>{spaceship.armament}</dd>

      <dt className="font-bold text-blue-800">Special Features:</dt>
      <dd>{spaceship.specialFeatures}</dd>

      <dt className="font-bold text-blue-800">Description:</dt>
      <dd>{spaceship.visualDescription}</dd>

      <dt className="font-bold text-blue-800">Price:</dt>
      <dd>{spaceship.priceCredits} credits</dd>

      <dt className="font-bold text-blue-800">Market Note:</dt>
      <dd>
        <em>{spaceship.marketNote}</em>
      </dd>
    </dl>
  );
};
