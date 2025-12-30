import { SpaceshipListPage } from "@/screens/spaceship-list-page/spaceship-list-page";
import { SpaceshipListPageStoreProviderRSC } from "@/screens/spaceship-list-page/spaceship-list-page-store-provider.rsc";
import { createSpaceshipListPageWiringForServer } from "@/wiring/spaceship-list-page/create-spaceship-list-page-wiring-for-server";
import { SpaceshipListPageWiringForBrowser } from "@/wiring/spaceship-list-page/spaceship-list-page-wiring-for-browser";

export default async function SpaceshipListPageEntry() {
  const serverWiring = await createSpaceshipListPageWiringForServer();

  return (
    <SpaceshipListPageWiringForBrowser>
      <SpaceshipListPageStoreProviderRSC serverWiring={serverWiring}>
        <SpaceshipListPage />
      </SpaceshipListPageStoreProviderRSC>
    </SpaceshipListPageWiringForBrowser>
  );
}
