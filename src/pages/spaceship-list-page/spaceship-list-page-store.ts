import type { Spaceship } from "@/core/spaceship";
import type { StoreApi } from "zustand";
import { createStore } from "zustand";

export type SpaceshipListPageStoreState = {
  spaceships: Spaceship[];
};

export type SpaceshipListPageStoreActions = object;

export type SpaceshipListPageStore = SpaceshipListPageStoreState &
  SpaceshipListPageStoreActions;
export type SpaceshipListPageStoreApi = StoreApi<SpaceshipListPageStore>;

export const createSpaceshipListPageStore = (
  initialState: Partial<SpaceshipListPageStoreState> = {},
): SpaceshipListPageStoreApi => {
  return createStore<SpaceshipListPageStore>()(() => ({
    spaceships: [],

    ...initialState,
  }));
};

export type Selector<T> = (store: SpaceshipListPageStore) => T;

export const selectSpaceships: Selector<Spaceship[]> = (
  store: SpaceshipListPageStore,
) => {
  return store.spaceships;
};
