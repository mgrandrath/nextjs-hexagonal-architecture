import { spaceshipAvailabilityMap } from "../../dummy-data";

type PathParams = {
  spaceshipId: string;
};

export const GET = async (
  _request: Request,
  { params }: { params: Promise<PathParams> },
) => {
  const { spaceshipId } = await params;

  const availability = spaceshipAvailabilityMap[spaceshipId];
  if (!availability) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json({
    availability,
  });
};
