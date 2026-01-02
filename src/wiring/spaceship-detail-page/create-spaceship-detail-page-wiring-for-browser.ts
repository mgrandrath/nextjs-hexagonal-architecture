import type { SpaceshipDetailPageBrowserPortCollection } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-browser-port-collection";
import { fetchSpaceshipAvailability } from "@/spaceship-api-adapter/spaceship-api";

export const createSpaceshipDetailPageWiringForBrowser =
  (): SpaceshipDetailPageBrowserPortCollection => {
    return {
      fetchSpaceshipAvailability: fetchSpaceshipAvailability({
        fetch: global.fetch,
      }),
    };
  };
