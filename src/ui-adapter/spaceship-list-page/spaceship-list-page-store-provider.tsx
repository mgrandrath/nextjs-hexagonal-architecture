"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";
import { useStore } from "zustand";
import type {
  Selector,
  SpaceshipListPageStoreApi,
  SpaceshipListPageStoreInitialState,
} from "./spaceship-list-page-store";
import { createSpaceshipListPageStore } from "./spaceship-list-page-store";
import { useSpaceshipListPageBrowserWiring } from "./spaceship-list-page-browser-wiring-provider";

const SpaceshipListPageStoreContext =
  createContext<SpaceshipListPageStoreApi | null>(null);

export type SpaceshipListPageStoreProviderProps = PropsWithChildren<{
  initialValues: SpaceshipListPageStoreInitialState;
}>;

export const SpaceshipListPageStoreProvider: FC<
  SpaceshipListPageStoreProviderProps
> = ({ initialValues, children }) => {
  const browserWiring = useSpaceshipListPageBrowserWiring();
  const [store] = useState(() =>
    createSpaceshipListPageStore(browserWiring, initialValues),
  );

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
