import { describe, expect, it, vi } from "vitest";
import {
  createSpaceshipListPageStore,
  selectIsLoadingMoreSpaceships,
  selectIsLoadMoreButtonDisabled,
  selectLoadMoreSpaceships,
  selectSpaceships,
} from "./spaceship-list-page-store";
import { createSpaceship } from "@/test-helpers/factories";
import type { Spaceship } from "@/core/spaceship";
import type { SpaceshipListPageBrowserPortCollection } from "./spaceship-list-page-browser-port-collection";

describe("spaceshipListPageStore", () => {
  it("initialize store with list of spaceships", () => {
    const browserWiring = createBrowserWiring();
    const initialSpaceships: Spaceship[] = [
      createSpaceship({ name: "The Void Razor" }),
      createSpaceship({ name: "The A.R.K. Bastion" }),
      createSpaceship({ name: "The Nebula Strider" }),
    ];

    const store = createSpaceshipListPageStore(browserWiring, {
      spaceships: initialSpaceships,
    });
    const spaceships = selectSpaceships(store.getState());

    expect(spaceships).toEqual(initialSpaceships);
  });

  it("load next page of spaceships", async () => {
    const expectedPageSize = 5;

    const initialSpaceships: Spaceship[] = [
      createSpaceship({ name: "The Star Chaser" }),
      createSpaceship({ name: "The Galactic Pioneer" }),
    ];
    const fetchedSpaceships: Spaceship[] = [
      createSpaceship({ name: "The Quantum Voyager" }),
      createSpaceship({ name: "The Celestial Nomad" }),
    ];
    const browserWiring = createBrowserWiring({
      fetchSpaceships: async ({ limit, offset }) => {
        expect(limit).toBe(expectedPageSize);
        expect(offset).toBe(initialSpaceships.length);

        return {
          spaceships: fetchedSpaceships,
          totalCount: 4,
        };
      },
    });

    const store = createSpaceshipListPageStore(browserWiring, {
      spaceships: initialSpaceships,
    });
    const loadMoreSpaceships = selectLoadMoreSpaceships(store.getState());

    loadMoreSpaceships();
    await vi.waitUntil(() => !selectIsLoadingMoreSpaceships(store.getState()));

    const spaceships = selectSpaceships(store.getState());
    expect(spaceships).toEqual([...initialSpaceships, ...fetchedSpaceships]);
  });

  it("disable 'load more' button while loading more spaceships", async () => {
    const browserWiring = createBrowserWiring();
    const store = createSpaceshipListPageStore(browserWiring, {});
    const loadMoreSpaceships = selectLoadMoreSpaceships(store.getState());

    expect(selectIsLoadMoreButtonDisabled(store.getState())).toBe(false);

    loadMoreSpaceships();
    expect(selectIsLoadMoreButtonDisabled(store.getState())).toBe(true);

    await vi.waitUntil(() => !selectIsLoadingMoreSpaceships(store.getState()));
    expect(selectIsLoadMoreButtonDisabled(store.getState())).toBe(false);
  });
});

const createBrowserWiring = (
  overrides: Partial<SpaceshipListPageBrowserPortCollection> = {},
): SpaceshipListPageBrowserPortCollection => {
  return {
    fetchSpaceships: async () => {
      return {
        spaceships: [],
        totalCount: 0,
      };
    },

    ...overrides,
  };
};
