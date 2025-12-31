import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import type { SpaceshipListPageBrowserPortCollection } from "./spaceship-list-page-browser-port-collection";

const SpaceshipListPageBrowserWiringContext =
  createContext<SpaceshipListPageBrowserPortCollection | null>(null);

export type SpaceshipListPageBrowserWiringProviderProps = PropsWithChildren<{
  browserWiring: SpaceshipListPageBrowserPortCollection;
}>;

export const SpaceshipListPageBrowserWiringProvider: FC<
  SpaceshipListPageBrowserWiringProviderProps
> = ({ browserWiring, children }) => (
  <SpaceshipListPageBrowserWiringContext.Provider value={browserWiring}>
    {children}
  </SpaceshipListPageBrowserWiringContext.Provider>
);

export const useSpaceshipListPageBrowserWiring =
  (): SpaceshipListPageBrowserPortCollection => {
    const browserWiring = useContext(SpaceshipListPageBrowserWiringContext);

    if (!browserWiring) {
      throw new Error(
        "useSpaceshipListPageBrowserWiring was called outside of SpaceshipListPageBrowserWiringProvider",
      );
    }

    return browserWiring;
  };
