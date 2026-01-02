import type {
  FetchSpaceship,
  FetchSpaceshipAvailability,
  FetchSpaceships,
} from "@/core/ports/spaceship-api-ports";
import z from "zod/v4";

export const ApiSpaceshipSchema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  role: z.string(),
  lengthMeters: z.number(),
  crewCount: z.number(),
  propulsion: z.string(),
  armament: z.string(),
  specialFeatures: z.string(),
  visualDescription: z.string(),
  priceCredits: z.number(),
  marketNote: z.string(),
});

export type ApiSpaceship = z.infer<typeof ApiSpaceshipSchema>;

export const SpaceshipsApiResponseSchema = z.object({
  spaceships: z.array(ApiSpaceshipSchema),
  totalCount: z.number(),
});

export type SpaceshipsApiResponse = z.infer<typeof SpaceshipsApiResponseSchema>;

export const fetchSpaceships =
  ({
    fetch,
    origin = "",
  }: {
    fetch: typeof global.fetch;
    origin?: string | null;
  }): FetchSpaceships =>
  async ({ offset, limit }) => {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });
    const url = `${origin}/api/spaceships?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();
    const parseResult = SpaceshipsApiResponseSchema.safeParse(data);

    if (!parseResult.success) {
      throw new Error("Invalid response data", { cause: parseResult.error });
    }

    // Map ApiSpaceship data to match Spaceship type if needed (here they are
    // identical)

    return {
      spaceships: parseResult.data.spaceships,
      totalCount: parseResult.data.totalCount,
    };
  };

export const SpaceshipApiResponseSchema = z.object({
  spaceship: ApiSpaceshipSchema,
});

export type SpaceshipApiResponse = z.infer<typeof SpaceshipApiResponseSchema>;

export const fetchSpaceship =
  ({
    fetch,
    origin = "",
  }: {
    fetch: typeof global.fetch;
    origin?: string | null;
  }): FetchSpaceship =>
  async ({ spaceshipId }) => {
    const response = await fetch(`${origin}/api/spaceships/${spaceshipId}`);
    if (response.status === 404) {
      return { spaceship: null };
    }

    const data = await response.json();
    const parseResult = SpaceshipApiResponseSchema.safeParse(data);

    if (!parseResult.success) {
      throw new Error("Invalid response data", { cause: parseResult.error });
    }

    return {
      spaceship: parseResult.data.spaceship,
    };
  };

export const ApiSpaceshipAvailabilitySchema = z.union([
  z.literal("UNKNOWN"),
  z.literal("IN_STOCK"),
  z.literal("OUT_OF_STOCK"),
  z.literal("LOW_STOCK"),
  z.literal("PRE_ORDER"),
]);

export type ApiSpaceshipAvailability = z.infer<
  typeof ApiSpaceshipAvailabilitySchema
>;

export const fetchSpaceshipAvailability =
  ({ fetch }: { fetch: typeof global.fetch }): FetchSpaceshipAvailability =>
  async ({ spaceshipId }) => {
    const response = await fetch(`/api/spaceships/${spaceshipId}/availability`);
    if (response.status === 404) {
      return { availability: null };
    }

    const data = await response.json();
    const parseResult = ApiSpaceshipAvailabilitySchema.safeParse(
      data.availability,
    );

    if (!parseResult.success) {
      throw new Error("Invalid response data", { cause: parseResult.error });
    }

    return {
      availability: parseResult.data,
    };
  };
