import type { Spaceship, SpaceshipAvailability } from "@/core/spaceship";
import { createStore, type StoreApi } from "zustand";
import type { SpaceshipDetailPageBrowserPortCollection } from "./spaceship-detail-page-browser-port-collection";

export type SpaceshipDetailPageStoreState = {
  spaceship: Spaceship;
  spaceshipAvailability: SpaceshipAvailability;
  isSpaceshipAvailabilityLoading: boolean;
};

export type SpaceshipDetailPageStoreInitialState =
  Partial<SpaceshipDetailPageStoreState> &
    Pick<SpaceshipDetailPageStoreState, "spaceship">;

export type SpaceshipDetailPageStoreActions = {
  onPageLoad: () => void;
};

export type SpaceshipDetailPageStore = SpaceshipDetailPageStoreState &
  SpaceshipDetailPageStoreActions;
export type SpaceshipDetailPageStoreApi = StoreApi<SpaceshipDetailPageStore>;

export const createSpaceshipDetailPageStore = (
  browserWiring: SpaceshipDetailPageBrowserPortCollection,
  initialState: SpaceshipDetailPageStoreInitialState,
): SpaceshipDetailPageStoreApi => {
  return createStore<SpaceshipDetailPageStore>()((set, get) => ({
    spaceshipAvailability: "UNKNOWN",
    isSpaceshipAvailabilityLoading: false,
    ...initialState,

    onPageLoad: async () => {
      set({ isSpaceshipAvailabilityLoading: true });

      try {
        const response = await browserWiring.fetchSpaceshipAvailability({
          spaceshipId: selectSpaceship(get()).id,
        });
        set({ spaceshipAvailability: response.availability ?? "UNKNOWN" });
      } catch (_error) {
        // TODO Log error to monitoring service
      } finally {
        set({ isSpaceshipAvailabilityLoading: false });
      }
    },
  }));
};

export type Selector<T> = (store: SpaceshipDetailPageStore) => T;

export const selectSpaceship: Selector<Spaceship> = (store) => store.spaceship;

export const selectSpaceshipAvailability: Selector<SpaceshipAvailability> = (
  store,
) => store.spaceshipAvailability;

export const selectIsAvailabilityLoading: Selector<boolean> = (store) => {
  return store.isSpaceshipAvailabilityLoading;
};

export const selectOnPageLoad: Selector<
  SpaceshipDetailPageStoreActions["onPageLoad"]
> = (store) => store.onPageLoad;
