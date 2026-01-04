import { createLogger, createSpaceship } from "@/test-helpers/factories";
import { describe, expect, it, vi } from "vitest";
import {
  createSpaceshipDetailPageStore,
  selectIsAvailabilityLoading,
  selectOnPageLoad,
  selectSpaceship,
  selectSpaceshipAvailability,
} from "./spaceship-detail-page-store";
import type { SpaceshipDetailPageBrowserPortCollection } from "./spaceship-detail-page-browser-port-collection";

describe("spaceshipDetailPageStore", () => {
  it("initialize store with spaceship details", () => {
    const initialSpaceship = createSpaceship();
    const store = createSpaceshipDetailPageStore(createBrowserWiring(), {
      spaceship: initialSpaceship,
    });

    const spaceship = selectSpaceship(store.getState());

    expect(spaceship).toEqual(initialSpaceship);
  });

  it("fetch spaceship availability on page load", async () => {
    const browserWiring = createBrowserWiring({
      fetchSpaceshipAvailability: async ({ spaceshipId }) => {
        if (spaceshipId === "spaceship-123") {
          return { availability: "PRE_ORDER" };
        } else {
          return { availability: null };
        }
      },
    });
    const store = createSpaceshipDetailPageStore(browserWiring, {
      spaceship: createSpaceship({ id: "spaceship-123" }),
    });
    const onPageLoad = selectOnPageLoad(store.getState());

    expect(selectSpaceshipAvailability(store.getState())).toEqual("UNKNOWN");

    onPageLoad();
    expect(selectIsAvailabilityLoading(store.getState())).toEqual(true);
    await vi.waitUntil(() => {
      return !selectIsAvailabilityLoading(store.getState());
    });

    expect(selectSpaceshipAvailability(store.getState())).toEqual("PRE_ORDER");
  });

  it("when spaceship availability is not found, availability remains UNKNOWN", async () => {
    const browserWiring = createBrowserWiring({
      fetchSpaceshipAvailability: async () => {
        return { availability: null };
      },
    });
    const store = createSpaceshipDetailPageStore(browserWiring, {
      spaceship: createSpaceship({ id: "non-existent-id" }),
    });
    const onPageLoad = selectOnPageLoad(store.getState());

    onPageLoad();
    await vi.waitUntil(() => {
      return !selectIsAvailabilityLoading(store.getState());
    });

    expect(selectSpaceshipAvailability(store.getState())).toEqual("UNKNOWN");
  });

  it("when fetching availability fails, availability remains UNKNOWN", async () => {
    const browserWiring = createBrowserWiring({
      fetchSpaceshipAvailability: async () => {
        throw new Error("Some error message");
      },
    });
    const store = createSpaceshipDetailPageStore(browserWiring, {
      spaceship: createSpaceship({ id: "irrelevant-id" }),
    });
    const onPageLoad = selectOnPageLoad(store.getState());

    onPageLoad();
    await vi.waitUntil(() => {
      return !selectIsAvailabilityLoading(store.getState());
    });

    expect(selectSpaceshipAvailability(store.getState())).toEqual("UNKNOWN");
  });

  it("when fetching availability fails, an error gets logged", async () => {
    const error = new Error("Some error message");
    const browserWiring = createBrowserWiring({
      logger: createLogger({
        error: vi.fn(),
      }),
      fetchSpaceshipAvailability: async () => {
        throw error;
      },
    });
    const store = createSpaceshipDetailPageStore(browserWiring, {
      spaceship: createSpaceship({ id: "spaceship-123" }),
    });
    const onPageLoad = selectOnPageLoad(store.getState());

    onPageLoad();
    await vi.waitUntil(() => {
      return !selectIsAvailabilityLoading(store.getState());
    });

    expect(browserWiring.logger.error).toHaveBeenCalledWith(
      "Failed to fetch spaceship availability",
      {
        spaceshipId: "spaceship-123",
        error,
      },
    );
  });
});

const createBrowserWiring = (
  overrides: Partial<SpaceshipDetailPageBrowserPortCollection> = {},
): SpaceshipDetailPageBrowserPortCollection => {
  return {
    logger: createLogger(overrides.logger),
    fetchSpaceshipAvailability: async () => {
      return { availability: "UNKNOWN" };
    },

    ...overrides,
  };
};
