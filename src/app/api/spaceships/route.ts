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
    name: "The Lucky 7",
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
  {
    id: "6",
    name: "The Xeno-Chrysalis",
    imageUrl: "/spaceships/spaceship_06_the-xeno-chrysalis.png",
    role: "Bio-Ship",
    lengthMeters: 300,
    crewCount: 1,
    armament: "Acidic Spore Launchers, Bio-Plasma Spitters",
    specialFeatures: "Regenerative Hull (heals damage over time)",
    priceCredits: 15_000_000_000,
    propulsion: "Peristaltic Ether-Swimmers",
    visualDescription:
      "It doesn't look built; it looks grown. The ship resembles a massive deep-sea crustacean mixed with a beetle. The hull is iridescent purple and green chitin. Pulsating veins run along the sides, glowing with orange bioluminescence. Instead of thrusters, the rear has trailing tentacles that drift in the cosmic wind.",
    marketNote:
      "Illegal Bio-Hazard. Sold not as a vehicle, but as livestock. The price reflects the danger of capturing it intact. Buyers must provide their own psychic-link interface or the ship will eat the pilot.",
  },
  {
    id: "7",
    name: "The Solar Flare IV",
    imageUrl: "/spaceships/spaceship_07_the-solar-flare-iv.png",
    role: "Racing Pinnace",
    lengthMeters: 12,
    crewCount: 1,
    armament: "None",
    specialFeatures:
      "Inertial Dampeners removed to reduce weight (dangerous for the pilot)",
    priceCredits: 55_000_000,
    propulsion: "Solar Sail + Fusion Afterburner",
    visualDescription:
      "Pure speed. The body is needle-thin, chrome-plated, and polished to a mirror finish. Extending from the top and bottom are massive, gossamer-thin golden solar sails that look like wings. The cockpit is tiny, located at the very rear, sitting atop a massive, singular engine exhaust that takes up 50% of the ship's mass.",
    marketNote:
      "Collector's Item. A rich person's death trap. The price is driven by the brand name and the custom fusion tuning. Insurance companies will refuse to cover this vessel.",
  },
  {
    id: "8",
    name: "The Panacea Orbital",
    imageUrl: "/spaceships/spaceship_08_the-panacea-orbital.png",
    role: "Medical Frigate",
    lengthMeters: 200,
    crewCount: 50,
    armament: "Point-defense lasers (anti-asteroid only)",
    specialFeatures:
      "Modular quarantine pods that can detach from the main hull",
    priceCredits: 1_500_000_000,
    propulsion: "Stabilized Ion Drives",
    visualDescription:
      "Clean, sterile, and friendly. The ship is primarily white with the universal red cross symbol painted on the flanks. It consists of a central spine with four rotating cylindrical habitats (to provide gravity for surgery). It emits a soft, blinking white light beacon to signal its neutrality.",
    marketNote:
      "Infrastructure Pricing. The hull is standard, but the medical equipment inside (MRI scanners, stasis pods, gravity-surgery theaters) justifies the billion-credit price tag. Often subsidized by planetary alliances.",
  },
  {
    id: "9",
    name: "The Monolith Vanguard",
    imageUrl: "/spaceships/spaceship_09_the-monolith-vanguard.png",
    role: "Ancient/Precursor",
    lengthMeters: 800,
    crewCount: 0,
    armament: "Disintegration Beams",
    specialFeatures: "Phase-shifting (can turn intangible)",
    priceCredits: 0,
    propulsion: "Field Manipulation (moves without visible thrust)",
    visualDescription:
      "Terrifyingly geometric. It is a perfect, floating black pyramid. The surface is etched with glowing geometric runes that shift color from cyan to magenta. There are no windows, no engines, and no seams. It hovers silently, defying physics, surrounded by a low-humming distortion field that warps the starlight behind it.",
    marketNote:
      "Mythic Rarity. There is no currency in the galaxy that can buy this. If you find it, you don't own it—it owns you. Governments will start wars just to control the sector it is floating in.",
  },
  {
    id: "10",
    name: "The Diplomat’s Jewel",
    imageUrl: "/spaceships/spaceship_10_the-diplomats-jewel.png",
    role: "Luxury Cruiser",
    lengthMeters: 80,
    crewCount: 16,
    armament: "High-yield defensive shields",
    specialFeatures: "Onboard gravity gardens and zero-g ballroom",
    priceCredits: 750_000_000,
    propulsion: "Silent-Running Hydro-Thrusters",
    visualDescription:
      "Opulence in space. The ship creates a silhouette of flowing curves, inspired by Art Deco design. The hull is trimmed in gold and deep royal blue. Large, oval stained-glass windows line the sides. It looks less like a military vessel and more like a flying yacht or a piece of expensive jewelry drifting through the stars.",
    marketNote:
      "Luxury Tax. You are paying for the gold trim, the real wood flooring, and the brand prestige. It has the shield generator of a warship but the hull strength of a Fabergé egg.",
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
