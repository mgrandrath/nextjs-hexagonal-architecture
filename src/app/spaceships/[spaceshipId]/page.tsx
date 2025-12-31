import { SpaceshipDetailPage } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page";
import { SpaceshipDetailPageStoreProviderRSC } from "@/ui-adapter/spaceship-detail-page/spaceship-detail-page-store-provider.rsc";
import { createSpaceshipDetailPageWiringForServer } from "@/wiring/spaceship-detail-page/create-spaceship-detail-page-wiring-for-server";

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
    <SpaceshipDetailPageStoreProviderRSC
      serverWiring={serverWiring}
      spaceshipId={spaceshipId}
    >
      <SpaceshipDetailPage />
    </SpaceshipDetailPageStoreProviderRSC>
  );
}
