import { SpaceshipListPage } from "@/screens/spaceship-list-page/spaceship-list-page";
import { SpaceshipListPageStoreProviderRSC } from "@/screens/spaceship-list-page/spaceship-list-page-store-provider.rsc";

export default async function SpaceshipListPageEntry() {
  return (
    <SpaceshipListPageStoreProviderRSC>
      <SpaceshipListPage />
    </SpaceshipListPageStoreProviderRSC>
  );
}
