"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";
import type {
  Selector,
  SpaceshipListPageStoreApi,
  SpaceshipListPageStoreState,
} from "./spaceship-list-page-store";
import { createSpaceshipListPageStore } from "./spaceship-list-page-store";
import { useStore } from "zustand";

const SpaceshipListPageStoreContext =
  createContext<SpaceshipListPageStoreApi | null>(null);

export type SpaceshipListPageStoreProviderProps = PropsWithChildren<{
  initialValues: Partial<SpaceshipListPageStoreState>;
}>;

export const SpaceshipListPageStoreProvider: FC<
  SpaceshipListPageStoreProviderProps
> = ({ initialValues, children }) => {
  const [store] = useState(() => createSpaceshipListPageStore(initialValues));

  return (
    <SpaceshipListPageStoreContext.Provider value={store}>
      {children}
    </SpaceshipListPageStoreContext.Provider>
  );
};

export const useSpaceshipListPageStore = <T,>(selector: Selector<T>): T => {
  const SpaceshipListPageStore = useContext(SpaceshipListPageStoreContext);

  if (!SpaceshipListPageStore) {
    throw new Error(
      "useSpaceshipListPageStore was called outside of SpaceshipListPageStoreProvider",
    );
  }

  return useStore(SpaceshipListPageStore, selector);
};
