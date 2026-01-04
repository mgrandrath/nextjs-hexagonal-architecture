import type { Logger } from "@/core/ports/monitoring-ports";
import type { FetchSpaceshipAvailability } from "@/core/ports/spaceship-api-ports";

export type SpaceshipDetailPageBrowserPortCollection = {
  logger: Logger;
  fetchSpaceshipAvailability: FetchSpaceshipAvailability;
};
