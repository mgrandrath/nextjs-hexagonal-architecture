import { createSpaceship } from "@/test-helpers/factories";
import { describe, expect, it } from "vitest";
import {
  createSpaceshipDetailPageStore,
  selectSpaceship,
} from "./spaceship-detail-page-store";

describe("spaceshipDetailPageStore", () => {
  it("initialize store with spaceship details", () => {
    const initialSpaceship = createSpaceship();
    const store = createSpaceshipDetailPageStore({
      spaceship: initialSpaceship,
    });

    const spaceship = selectSpaceship(store.getState());

    expect(spaceship).toEqual(initialSpaceship);
  });
});
