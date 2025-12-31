import { headers } from "next/headers";
import type { SpaceshipDetailPageServerPortCollection } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-server-port-collection";
import { fetchSpaceship } from "@/spaceship-api-adapter/spaceship-api";

export const createSpaceshipDetailPageWiringForServer =
  async (): Promise<SpaceshipDetailPageServerPortCollection> => {
    const requestHeaders = await headers();
    const origin = `http://${requestHeaders.get("host") ?? "localhost"}`;

    return {
      fetchSpaceship: fetchSpaceship({ fetch: global.fetch, origin }),
    };
  };
