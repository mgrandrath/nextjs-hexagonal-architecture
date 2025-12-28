import { describe, expect, it } from "vitest";
import {
  createSpaceshipListPageStore,
  selectSpaceships,
} from "./spaceship-list-page-store";
import { createSpaceship } from "@/test-helpers/factories";
import type { Spaceship } from "@/core/spaceship";

describe("spaceshipListPageStore", () => {
  it("initialize store with list of spaceships", () => {
    const initialSpaceships: Spaceship[] = [
      createSpaceship({ name: "The Void Razor" }),
      createSpaceship({ name: "The A.R.K. Bastion" }),
      createSpaceship({ name: "The Nebula Strider" }),
    ];

    const store = createSpaceshipListPageStore({
      spaceships: initialSpaceships,
    });
    const spaceships = selectSpaceships(store.getState());

    expect(spaceships).toEqual(initialSpaceships);
  });
});
