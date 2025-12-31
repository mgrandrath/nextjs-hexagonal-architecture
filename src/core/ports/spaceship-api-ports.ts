import type { Spaceship } from "../spaceship";

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
