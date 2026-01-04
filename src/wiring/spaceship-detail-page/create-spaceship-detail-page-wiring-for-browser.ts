import type { SpaceshipDetailPageBrowserPortCollection } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-browser-port-collection";
import { fetchSpaceshipAvailability } from "@/spaceship-api-adapter/spaceship-api";
import { createLoggerService } from "@/monitoring-adapter/monitoring-adapter";

export const createSpaceshipDetailPageWiringForBrowser =
  (): SpaceshipDetailPageBrowserPortCollection => {
    return {
      logger: createLoggerService(),
      fetchSpaceshipAvailability: fetchSpaceshipAvailability({
        fetch: global.fetch,
      }),
    };
  };
