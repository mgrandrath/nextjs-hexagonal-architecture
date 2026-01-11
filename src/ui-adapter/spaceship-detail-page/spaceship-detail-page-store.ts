import type { Spaceship, SpaceshipAvailability } from "@/core/spaceship";
import { createStore, type StoreApi } from "zustand";
import type { SpaceshipDetailPageBrowserPortCollection } from "./spaceship-detail-page-browser-port-collection";

export type SpaceshipDetailPageStoreState = {
  spaceship: Spaceship;
  spaceshipAvailability: SpaceshipAvailability;
  isSpaceshipAvailabilityLoading: boolean;
};

type RequiredFields = "spaceship";

export type SpaceshipDetailPageStoreInitialState =
  Partial<SpaceshipDetailPageStoreState> &
    Pick<SpaceshipDetailPageStoreState, RequiredFields>;

const defaultState: Omit<SpaceshipDetailPageStoreState, RequiredFields> = {
  spaceshipAvailability: "UNKNOWN",
  isSpaceshipAvailabilityLoading: false,
};

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
    ...defaultState,
    ...initialState,

    onPageLoad: async () => {
      const spaceshipId = selectSpaceship(get()).id;

      try {
        set({ isSpaceshipAvailabilityLoading: true });
        const response = await browserWiring.fetchSpaceshipAvailability({
          spaceshipId,
        });
        set({ spaceshipAvailability: response.availability ?? "UNKNOWN" });
      } catch (error) {
        browserWiring.logger.error("Failed to fetch spaceship availability", {
          spaceshipId,
          error,
        });
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
