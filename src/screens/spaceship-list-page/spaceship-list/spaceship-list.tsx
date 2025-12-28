import type { Spaceship } from "@/core/spaceship";
import type { FC } from "react";

type SpaceshipListProps = {
  spaceships: Spaceship[];
};

export const SpaceshipList: FC<SpaceshipListProps> = ({ spaceships }) => {
  return (
    <div>
      <h2>Spaceship List Component</h2>
      <ul>
        {spaceships.map((spaceship) => (
          <li key={spaceship.id}>
            {spaceship.name} - {spaceship.role} - {spaceship.lengthMeters}{" "}
            meters
          </li>
        ))}
      </ul>
    </div>
  );
};
