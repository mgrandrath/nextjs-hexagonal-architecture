import { spaceships } from "../dummy-data";

type PathParams = {
  spaceshipId: string;
};

export const GET = async (
  _request: Request,
  { params }: { params: Promise<PathParams> },
) => {
  const { spaceshipId } = await params;

  const spaceship = spaceships.find(
    (spaceship) => spaceship.id === spaceshipId,
  );
  if (!spaceship) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json({
    spaceship,
  });
};
