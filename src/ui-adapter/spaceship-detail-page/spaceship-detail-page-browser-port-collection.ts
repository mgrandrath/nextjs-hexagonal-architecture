import type { FetchSpaceshipAvailability } from "@/core/ports/spaceship-api-ports";

export type SpaceshipDetailPageBrowserPortCollection = {
  fetchSpaceshipAvailability: FetchSpaceshipAvailability;
};
