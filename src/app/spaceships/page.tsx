import { SpaceshipListPage } from "@/screens/spaceship-list-page/spaceship-list-page";
import { SpaceshipListPageStoreProviderRSC } from "@/screens/spaceship-list-page/spaceship-list-page-store-provider.rsc";
import { createSpaceshipListPageWiringForServer } from "@/wiring/spaceship-list-page/create-spaceship-list-page-wiring-for-server";

export default async function SpaceshipListPageEntry() {
  const serverWiring = await createSpaceshipListPageWiringForServer();

  return (
    <SpaceshipListPageStoreProviderRSC serverWiring={serverWiring}>
      <SpaceshipListPage />
    </SpaceshipListPageStoreProviderRSC>
  );
}
