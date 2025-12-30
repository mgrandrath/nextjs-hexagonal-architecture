import type { FetchSpaceships } from "@/core/ports/spaceship-api-ports";
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

export const ApiResponseSchema = z.object({
  spaceships: z.array(ApiSpaceshipSchema),
  totalCount: z.number(),
});

export type ApiResponse = z.infer<typeof ApiResponseSchema>;

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
    const apiResponse = ApiResponseSchema.safeParse(data);

    if (!apiResponse.success) {
      throw new Error("Invalid response data", { cause: apiResponse.error });
    }

    // Map ApiSpaceship data to match Spaceship type if needed (here they are
    // identical)

    return {
      spaceships: apiResponse.data.spaceships,
      totalCount: apiResponse.data.totalCount,
    };
  };
