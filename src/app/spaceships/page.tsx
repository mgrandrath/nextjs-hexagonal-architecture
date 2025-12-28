import { SpaceshipListPage } from "@/pages/spaceship-list-page/spaceship-list-page";
import { SpaceshipListPageStoreProviderRSC } from "@/pages/spaceship-list-page/spaceship-list-page-store-provider.rsc";

export default async function SpaceshipListPageEntry() {
  return (
    <SpaceshipListPageStoreProviderRSC>
      <SpaceshipListPage />
    </SpaceshipListPageStoreProviderRSC>
  );
}
