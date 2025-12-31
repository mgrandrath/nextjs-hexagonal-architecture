import type { SpaceshipListPageBrowserPortCollection } from "@/ui-adapter/spaceship-list-page/spaceship-list-page-browser-port-collection";
import { fetchSpaceships } from "@/spaceship-api-adapter/spaceship-api";

export const createSpaceshipListPageWiringForBrowser =
  (): SpaceshipListPageBrowserPortCollection => {
    return {
      fetchSpaceships: fetchSpaceships({ fetch: global.fetch }),
    };
  };
