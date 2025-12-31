import { spaceships } from "./dummy-data";

export const GET = async (request: Request) => {
  const url = new URL(request.url);

  if (!url.searchParams.has("offset") || !url.searchParams.has("limit")) {
    return new Response("Missing offset or limit query parameters", {
      status: 400,
    });
  }

  const offset = Number(url.searchParams.get("offset") ?? "0");
  const limit = Number(url.searchParams.get("limit") ?? "10");

  const pagedSpaceships = spaceships.slice(offset, offset + limit);
  return Response.json({
    spaceships: pagedSpaceships,
    totalCount: spaceships.length,
  });
};
