import type { FetchSpaceships } from "@/core/ports/spaceship-api-ports";

export type SpaceshipListPageServerPortCollection = {
  fetchSpaceships: FetchSpaceships;
};
