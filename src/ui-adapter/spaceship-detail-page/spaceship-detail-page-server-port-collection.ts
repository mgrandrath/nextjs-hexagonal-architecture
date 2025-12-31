import type { FetchSpaceship } from "@/core/ports/spaceship-api-ports";

export type SpaceshipDetailPageServerPortCollection = {
  fetchSpaceship: FetchSpaceship;
};
