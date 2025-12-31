import type { FetchSpaceships } from "@/core/ports/spaceship-api-ports";

export type SpaceshipListPageBrowserPortCollection = {
  fetchSpaceships: FetchSpaceships;
};
