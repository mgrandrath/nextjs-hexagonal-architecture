import type { Spaceship } from "@/core/spaceship";
import type { FC } from "react";

type SpaceshipTitleProps = {
  spaceship: Spaceship;
};

export const SpaceshipTitle: FC<SpaceshipTitleProps> = ({ spaceship }) => {
  return <h1 className="text-3xl font-bold mb-4">{spaceship.name}</h1>;
};
