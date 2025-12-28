import type { Spaceship } from "../core/spaceship";

let spaceshipIdCounter = 1;

export const createSpaceship = (
  overrides: Partial<Spaceship> = {},
): Spaceship => {
  return {
    id: `ship-${String(spaceshipIdCounter++).padStart(3, "0")}`,
    name: "Starhawk",
    role: "Hit-and-run tactics / Space Superiority",
    lengthMeters: 18,
    crewCount: 1,
    propulsion: "Twin Ion-Pulse Thrusters",
    armament: 'Dual kinetic auto-cannons, 4 "Firefly" seeking missiles.',
    specialFeatures: '"Blink" Drive (Short-range tactical teleportation).',
    visualDescription:
      "A sleek, aggressive dagger shape. The hull is matte charcoal with neon red warning stripes. The cockpit is a narrow, slit-like canopy of golden glass. Two massive engines sit on independent gimbals at the rear, allowing the ship to fly sideways while facing forward. It looks like a high-tech predatory bird.",
    priceCredits: 125000000,
    marketNote:
      'High-End Military Surplus. The price is steep for a fighter due to the proprietary "Blink" drive technology. Maintenance costs are astronomical, as the teleportation coils burn out every 50 jumps.',
    ...overrides,
  };
};
