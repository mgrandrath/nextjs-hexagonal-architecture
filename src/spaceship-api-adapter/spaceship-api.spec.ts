import { describe, expect, it, vi } from "vitest";
import type { ApiSpaceship, ApiSpaceshipAvailability } from "./spaceship-api";
import {
  fetchSpaceship,
  fetchSpaceshipAvailability,
  fetchSpaceships,
} from "./spaceship-api";
import { createApiSpaceship } from "@/test-helpers/factories";

type Fetch = typeof global.fetch;

describe("fetchSpaceships", () => {
  it("loads spaceships", async () => {
    const fetch = createSpaceshipsFetch([
      createApiSpaceship({ name: "Explorer I" }),
      createApiSpaceship({ name: "Cargo Master" }),
      createApiSpaceship({ name: "Star Cruiser" }),
    ]);

    const response = await fetchSpaceships({ fetch })({
      offset: 0,
      limit: 10,
    });

    expect(response).toEqual({
      spaceships: [
        expect.objectContaining({ name: "Explorer I" }),
        expect.objectContaining({ name: "Cargo Master" }),
        expect.objectContaining({ name: "Star Cruiser" }),
      ],
      totalCount: 3,
    });
  });

  it("slice spaceships according to offset and limit", async () => {
    const fetch = createSpaceshipsFetch([
      createApiSpaceship({ name: "Explorer I" }),
      createApiSpaceship({ name: "Cargo Master" }),
      createApiSpaceship({ name: "Star Cruiser" }),
      createApiSpaceship({ name: "Galaxy Runner" }),
      createApiSpaceship({ name: "Nebula Voyager" }),
      createApiSpaceship({ name: "Cosmic Pioneer" }),
    ]);

    const response = await fetchSpaceships({ fetch })({
      offset: 2,
      limit: 3,
    });

    expect(response).toEqual({
      spaceships: [
        expect.objectContaining({ name: "Star Cruiser" }),
        expect.objectContaining({ name: "Galaxy Runner" }),
        expect.objectContaining({ name: "Nebula Voyager" }),
      ],
      totalCount: 6,
    });
  });

  it("throw an error when response data is invalid", async () => {
    const fetch: Fetch = async () => {
      return new Response(
        JSON.stringify({
          spaceships: [{ id: "invalid-spaceship" }],
          totalCount: 1,
        }),
      );
    };

    await expect(
      fetchSpaceships({ fetch })({ offset: 0, limit: 10 }),
    ).rejects.toThrow("Invalid response data");
  });

  it("prepend origin when provided", async () => {
    const fetch = vi.fn<Fetch>(async (_url) => {
      return new Response(
        JSON.stringify({
          spaceships: [],
          totalCount: 0,
        }),
      );
    });

    await fetchSpaceships({ fetch, origin: "https://example.com" })({
      offset: 0,
      limit: 10,
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://example.com/api/spaceships?offset=0&limit=10",
    );
  });

  const createSpaceshipsFetch = (spaceships: ApiSpaceship[]): Fetch => {
    return async (url) => {
      const parsedUrl = new URL(url.toString(), "http://localhost");
      const offset = Number(parsedUrl.searchParams.get("offset"));
      const limit = Number(parsedUrl.searchParams.get("limit"));
      const slicedSpaceships = spaceships.slice(offset, offset + limit);

      if (parsedUrl.pathname === "/api/spaceships") {
        return new Response(
          JSON.stringify({
            spaceships: slicedSpaceships,
            totalCount: spaceships.length,
          }),
        );
      } else {
        return new Response("Not Found", { status: 404 });
      }
    };
  };
});

describe("fetchSpaceship", () => {
  it("loads a spaceship by ID", async () => {
    const fetch = createSpaceshipFetch(
      createApiSpaceship({ id: "spaceship-11", name: "Explorer I" }),
    );

    const response = await fetchSpaceship({ fetch })({
      spaceshipId: "spaceship-11",
    });

    expect(response).toEqual({
      spaceship: expect.objectContaining({ name: "Explorer I" }),
    });
  });

  it("returns null when spaceship is not found", async () => {
    const fetch = createSpaceshipFetch();

    const response = await fetchSpaceship({ fetch })({
      spaceshipId: "non-existent-id",
    });

    expect(response).toEqual({
      spaceship: null,
    });
  });

  it("throw an error when response data is invalid", async () => {
    const fetch: Fetch = async () => {
      return new Response(
        JSON.stringify({
          spaceship: { id: "invalid-spaceship" },
        }),
      );
    };

    await expect(
      fetchSpaceship({ fetch })({ spaceshipId: "irrelevant-id" }),
    ).rejects.toThrow("Invalid response data");
  });

  it("prepend origin when provided", async () => {
    const fetch = vi.fn<Fetch>(async (_url) => {
      return new Response(
        JSON.stringify({
          spaceship: createApiSpaceship(),
        }),
      );
    });

    await fetchSpaceship({ fetch, origin: "https://example.com" })({
      spaceshipId: "spaceship-123",
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://example.com/api/spaceships/spaceship-123",
    );
  });

  const createSpaceshipFetch = (spaceship?: ApiSpaceship): Fetch => {
    return async (url) => {
      const parsedUrl = new URL(url.toString(), "http://localhost");
      const pathPattern = /^\/api\/spaceships\/(.+)$/;
      const match = parsedUrl.pathname.match(pathPattern);
      if (match && spaceship && match[1] === spaceship.id) {
        return new Response(
          JSON.stringify({
            spaceship,
          }),
        );
      } else {
        return new Response("Not Found", { status: 404 });
      }
    };
  };
});

describe("fetchSpaceshipAvailability", () => {
  it("fetch spaceship availability by ID", async () => {
    const fetch = createSpaceshipAvailabilityFetch("spaceship-123", "IN_STOCK");

    const response = await fetchSpaceshipAvailability({ fetch })({
      spaceshipId: "spaceship-123",
    });

    expect(response).toEqual({
      availability: "IN_STOCK",
    });
  });

  it("returns null when spaceship availability is not found", async () => {
    const fetch = createSpaceshipAvailabilityFetch();

    const response = await fetchSpaceshipAvailability({ fetch })({
      spaceshipId: "non-existent-id",
    });

    expect(response).toEqual({
      availability: null,
    });
  });

  it("throw an error when response data is invalid", async () => {
    const fetch: Fetch = async () => {
      return new Response(
        JSON.stringify({
          availability: 123,
        }),
      );
    };

    await expect(
      fetchSpaceshipAvailability({ fetch })({ spaceshipId: "irrelevant-id" }),
    ).rejects.toThrow("Invalid response data");
  });

  const createSpaceshipAvailabilityFetch = (
    spaceshipId?: string,
    spaceshipAvailability: ApiSpaceshipAvailability = "UNKNOWN",
  ): Fetch => {
    return async (url) => {
      const parsedUrl = new URL(url.toString(), "http://localhost");
      const pathPattern = /^\/api\/spaceships\/(.+)\/availability$/;
      const match = parsedUrl.pathname.match(pathPattern);
      if (match && spaceshipId && match[1] === spaceshipId) {
        return new Response(
          JSON.stringify({
            availability: spaceshipAvailability,
          }),
        );
      } else {
        return new Response("Not Found", { status: 404 });
      }
    };
  };
});
