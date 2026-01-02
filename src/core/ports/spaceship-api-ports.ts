import type { Spaceship, SpaceshipAvailability } from "../spaceship";

export type FetchSpaceships = (options: {
  offset: number;
  limit: number;
}) => Promise<{
  spaceships: Spaceship[];
  totalCount: number;
}>;

export type FetchSpaceship = (options: { spaceshipId: string }) => Promise<{
  spaceship: Spaceship | null;
}>;

export type FetchSpaceshipAvailability = (options: {
  spaceshipId: string;
}) => Promise<{
  availability: SpaceshipAvailability | null;
}>;
