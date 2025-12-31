import type { FC } from "react";
import type { Spaceship } from "@/core/spaceship";

export type SpaceshipDetailsProps = {
  spaceship: Spaceship;
};

export const SpaceshipDetails: FC<SpaceshipDetailsProps> = ({ spaceship }) => {
  return <div>{spaceship.name}</div>;
};
