import type { Spaceship } from "@/core/spaceship";
import { createStore, type StoreApi } from "zustand";

export type SpaceshipDetailPageStoreState = {
  spaceship: Spaceship;
};

export type SpaceshipDetailPageStoreInitialState =
  Partial<SpaceshipDetailPageStoreState> &
    Pick<SpaceshipDetailPageStoreState, "spaceship">;

export type SpaceshipDetailPageStoreActions = object;

export type SpaceshipDetailPageStore = SpaceshipDetailPageStoreState &
  SpaceshipDetailPageStoreActions;
export type SpaceshipDetailPageStoreApi = StoreApi<SpaceshipDetailPageStore>;

export const createSpaceshipDetailPageStore = (
  initialState: SpaceshipDetailPageStoreInitialState,
): SpaceshipDetailPageStoreApi => {
  return createStore<SpaceshipDetailPageStore>()(() => ({
    ...initialState,
  }));
};

export type Selector<T> = (store: SpaceshipDetailPageStore) => T;

export const selectSpaceship: Selector<Spaceship> = (store) => store.spaceship;
