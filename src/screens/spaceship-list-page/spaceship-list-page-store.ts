import type { Spaceship } from "@/core/spaceship";
import type { StoreApi } from "zustand";
import { createStore } from "zustand";
import type { SpaceshipListPageBrowserPortCollection } from "./spaceship-list-page-browser-port-collection";

export type SpaceshipListPageStoreState = {
  spaceships: Spaceship[];
  isLoadingMoreSpaceships: boolean;
};

const defaultInitialState: SpaceshipListPageStoreState = {
  spaceships: [],
  isLoadingMoreSpaceships: false,
};

export type SpaceshipListPageStoreActions = {
  loadMoreSpaceships: () => void;
};

export type SpaceshipListPageStore = SpaceshipListPageStoreState &
  SpaceshipListPageStoreActions;
export type SpaceshipListPageStoreApi = StoreApi<SpaceshipListPageStore>;

export const createSpaceshipListPageStore = (
  browserWiring: SpaceshipListPageBrowserPortCollection,
  initialState: Partial<SpaceshipListPageStoreState> = {},
): SpaceshipListPageStoreApi => {
  return createStore<SpaceshipListPageStore>()((set, get) => ({
    ...defaultInitialState,
    ...initialState,

    loadMoreSpaceships: async () => {
      set({ isLoadingMoreSpaceships: true });

      try {
        const { spaceships: fetchedSpaceships } =
          await browserWiring.fetchSpaceships({
            limit: 5,
            offset: selectSpaceships(get()).length,
          });
        set((state) => ({
          spaceships: [...state.spaceships, ...fetchedSpaceships],
        }));
      } finally {
        set({ isLoadingMoreSpaceships: false });
      }
    },
  }));
};

export type Selector<T> = (store: SpaceshipListPageStore) => T;

export const selectSpaceships: Selector<Spaceship[]> = (
  store: SpaceshipListPageStore,
) => {
  return store.spaceships;
};

export const selectIsLoadMoreButtonDisabled: Selector<boolean> = (
  store: SpaceshipListPageStore,
) => {
  return store.isLoadingMoreSpaceships;
};

export const selectIsLoadingMoreSpaceships: Selector<boolean> = (
  store: SpaceshipListPageStore,
) => {
  return store.isLoadingMoreSpaceships;
};

export const selectLoadMoreSpaceships: Selector<
  SpaceshipListPageStoreActions["loadMoreSpaceships"]
> = (store: SpaceshipListPageStore) => {
  return store.loadMoreSpaceships;
};
