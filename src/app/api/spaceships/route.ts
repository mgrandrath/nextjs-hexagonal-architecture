import type { ApiSpaceship } from "@/spaceship-api-adapter/spaceship-api";

const spaceships: ApiSpaceship[] = [
  {
    id: "1",
    name: "The Void Razor",
    imageUrl: "/spaceships/spaceship_01_the-void-razor.png",
    role: "Interceptor Class",
    lengthMeters: 18,
    crewCount: 1,
    armament: "Dual kinetic auto-cannons, 4 'Firefly' seeking missiles",
    specialFeatures: "'Blink' Drive (Short-range tactical teleportation)",
    priceCredits: 125_000_000,
    propulsion: "Twin Ion-Pulse Thrusters",
    visualDescription:
      "A sleek, aggressive dagger shape. The hull is matte charcoal with neon red warning stripes. The cockpit is a narrow, slit-like canopy of golden glass. Two massive engines sit on independent gimbals at the rear, allowing the ship to fly sideways while facing forward. It looks like a high-tech predatory bird.",
    marketNote:
      "High-End Military Surplus. The price is steep for a fighter due to the proprietary 'Blink' drive technology. Maintenance costs are astronomical, as the teleportation coils burn out every 50 jumps.",
  },
  {
    id: "2",
    name: "The A.R.K. Bastion",
    imageUrl: "/spaceships/spaceship_02_the-ark-bastion.png",
    role: "Dreadnought",
    lengthMeters: 2500,
    crewCount: 4000,
    armament:
      "Spinal-mounted Railgun (runs the length of the ship), Broadside Plasma Batteries, Flak Defense Grid",
    specialFeatures:
      "Shield layering technology that hardens under sustained fire",
    priceCredits: 450_000_000_000,
    propulsion: "Gravity-Well Displacement Engine",
    visualDescription:
      "A flying fortress that prioritizes function over form. It is blocky and brutalist, resembling a massive flying skyscraper turned on its side. The hull is thick, scarred grey metal covered in heavy armor plating. Tiny lights speckle the surface, giving a sense of massive scale. It does not look aerodynamic; it looks unstoppable.",
    marketNote:
      "National Budget Scale. You don't buy this ship; you tax a solar system to build it. The raw metal cost alone equals the GDP of a small colony. Requires a dedicated shipyard just to service the engines.",
  },
  {
    id: "3",
    name: "The Nebula Strider",
    imageUrl: "/spaceships/spaceship_03_the-nebula-strider.png",
    role: "Exploration Vessel",
    lengthMeters: 120,
    crewCount: 12,
    armament: "None (Defensive chaff and jamming only)",
    specialFeatures:
      "Deep-spectrum sensor array capable of scanning planetary surfaces from orbit",
    priceCredits: 850_000_000,
    propulsion: "Alcubierre Warp Rings",
    visualDescription:
      "Elegant and symmetrical. The main fuselage is a clean, pearl-white teardrop. Surrounding the rear of the ship are two large rings that glow with soft blue Cherenkov radiation. The front features a massive observation dome made of transparent aluminum, allowing a 180-degree view of the cosmos.",
    marketNote:
      "Institutional Investment. Priced for universities and mega-corps. 60% of the cost is tied up in the sensor array and the Alcubierre rings. It has zero resale value to pirates because it has no guns.",
  },
  {
    id: "4",
    name: 'The Rust Bucket "Lucky 7"',
    imageUrl: "/spaceships/spaceship_04_the-rust-bucket-lucky-7.png",
    role: "Scavenger Hauler",
    lengthMeters: 65,
    crewCount: 3,
    armament: "Mining lasers (repurposed for combat), Tractor Beam",
    specialFeatures:
      "Magnetic grappling claws for latching onto derelict ships",
    priceCredits: 85_000,
    propulsion: "Chemical Rockets (modified and overclocked)",
    visualDescription:
      "An ugly, lovable mess. The ship looks like it was welded together from parts of five other ships. Wires and pipes are exposed on the exterior. The paint is mismatched—one wing is yellow, the body is rusty brown, and the engine cowlings are bare steel. It looks barely spaceworthy, with a bulky, crane-like arm folded over the top.",
    marketNote:
      "Scrap Value. The ship is cheaper than the fuel required to fill it. You are essentially paying for the debts attached to the registration and the customized grappling arm. The dog is not included in the sale.",
  },
  {
    id: "5",
    name: "The Obsidian Whisper",
    imageUrl: "/spaceships/spaceship_05_the-obsidian-whisper.png",
    role: "Stealth Corvette",
    lengthMeters: 45,
    crewCount: 4,
    armament: "EMP Torpedoes, localized hacking beam",
    specialFeatures:
      "'Vantablack' Hull coating (absorbs 99.9% of light and radar)",
    priceCredits: 3_200_000_000,
    propulsion: "Thermal-Nullifying Ion Gliders",
    visualDescription:
      "Flat, angular, and triangular, resembling a stealth bomber but sharper. The entire ship is absolute void-black; it looks like a hole in space rather than an object. There are no visible engine exhausts or windows (pilots use VR headsets linked to external cameras). It has a jagged, predatory silhouette.",
    marketNote:
      "Black Budget. The Vantablack coating is chemically unstable and costs a fortune to re-apply. The price includes a wiping of the ship's previous mission logs. Possession of this vessel is a felony in 12 sectors.",
  },
];

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
