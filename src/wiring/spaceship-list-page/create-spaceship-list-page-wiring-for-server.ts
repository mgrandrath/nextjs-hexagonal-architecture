import { headers } from "next/headers";
import type { SpaceshipListPageServerPortCollection } from "@/ui-adapter/spaceship-list-page/spaceship-list-page-server-port-collection";
import { fetchSpaceships } from "@/spaceship-api-adapter/spaceship-api";

export const createSpaceshipListPageWiringForServer =
  async (): Promise<SpaceshipListPageServerPortCollection> => {
    const requestHeaders = await headers();
    const origin = `http://${requestHeaders.get("host") ?? "localhost"}`;

    return {
      fetchSpaceships: fetchSpaceships({ fetch: global.fetch, origin }),
    };
  };
