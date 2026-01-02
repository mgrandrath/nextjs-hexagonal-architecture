"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";
import { useStore } from "zustand";
import type { Selector } from "./spaceship-detail-page-store";
import {
  createSpaceshipDetailPageStore,
  type SpaceshipDetailPageStoreApi,
  type SpaceshipDetailPageStoreInitialState,
} from "./spaceship-detail-page-store";
import { useSpaceshipDetailPageBrowserWiring } from "./spaceship-detail-page-browser-wiring-provider";

const SpaceshipDetailPageStoreContext =
  createContext<SpaceshipDetailPageStoreApi | null>(null);

export type SpaceshipDetailPageStoreProviderProps = PropsWithChildren<{
  initialValues: SpaceshipDetailPageStoreInitialState;
}>;

export const SpaceshipDetailPageStoreProvider: FC<
  SpaceshipDetailPageStoreProviderProps
> = ({ initialValues, children }) => {
  const browserWiring = useSpaceshipDetailPageBrowserWiring();
  const [store] = useState(() =>
    createSpaceshipDetailPageStore(browserWiring, initialValues),
  );

  return (
    <SpaceshipDetailPageStoreContext.Provider value={store}>
      {children}
    </SpaceshipDetailPageStoreContext.Provider>
  );
};

export const useSpaceshipDetailPageStore = <T,>(selector: Selector<T>): T => {
  const SpaceshipDetailPageStore = useContext(SpaceshipDetailPageStoreContext);

  if (!SpaceshipDetailPageStore) {
    throw new Error(
      "useSpaceshipDetailPageStore was called outside of SpaceshipDetailPageStoreProvider",
    );
  }

  return useStore(SpaceshipDetailPageStore, selector);
};
