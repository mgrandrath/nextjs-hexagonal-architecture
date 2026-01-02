import { SpaceshipDetailPage } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page";
import { SpaceshipDetailPageStoreProviderRSC } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-store-provider.rsc";
import { createSpaceshipDetailPageWiringForServer } from "@/wiring/spaceship-detail-page/create-spaceship-detail-page-wiring-for-server";
import { SpaceshipDetailPageWiringForBrowser } from "@/wiring/spaceship-detail-page/spaceship-list-page-wiring-for-browser";

type SpaceshipDetailPagePathParams = {
  spaceshipId: string;
};

type SpaceshipDetailPageEntryProps = {
  params: Promise<SpaceshipDetailPagePathParams>;
};

export default async function SpaceshipDetailPageEntry({
  params,
}: SpaceshipDetailPageEntryProps) {
  const serverWiring = await createSpaceshipDetailPageWiringForServer();
  const { spaceshipId } = await params;

  return (
    <SpaceshipDetailPageWiringForBrowser>
      <SpaceshipDetailPageStoreProviderRSC
        serverWiring={serverWiring}
        spaceshipId={spaceshipId}
      >
        <SpaceshipDetailPage />
      </SpaceshipDetailPageStoreProviderRSC>
    </SpaceshipDetailPageWiringForBrowser>
  );
}
