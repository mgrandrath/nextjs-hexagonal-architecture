import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import type { SpaceshipDetailPageBrowserPortCollection } from "./spaceship-detail-page-browser-port-collection";

const SpaceshipDetailPageBrowserWiringContext =
  createContext<SpaceshipDetailPageBrowserPortCollection | null>(null);

export type SpaceshipDetailPageBrowserWiringProviderProps = PropsWithChildren<{
  browserWiring: SpaceshipDetailPageBrowserPortCollection;
}>;

export const SpaceshipDetailPageBrowserWiringProvider: FC<
  SpaceshipDetailPageBrowserWiringProviderProps
> = ({ browserWiring, children }) => (
  <SpaceshipDetailPageBrowserWiringContext.Provider value={browserWiring}>
    {children}
  </SpaceshipDetailPageBrowserWiringContext.Provider>
);

export const useSpaceshipDetailPageBrowserWiring =
  (): SpaceshipDetailPageBrowserPortCollection => {
    const browserWiring = useContext(SpaceshipDetailPageBrowserWiringContext);

    if (!browserWiring) {
      throw new Error(
        "useSpaceshipDetailPageBrowserWiring was called outside of SpaceshipDetailPageBrowserWiringProvider",
      );
    }

    return browserWiring;
  };
