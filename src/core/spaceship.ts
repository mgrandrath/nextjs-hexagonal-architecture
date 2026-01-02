export type Spaceship = {
  id: string;
  name: string;
  imageUrl: string;
  role: string;
  lengthMeters: number;
  crewCount: number;
  propulsion: string;
  armament: string;
  specialFeatures: string;
  visualDescription: string;
  priceCredits: number;
  marketNote: string;
};

export type SpaceshipAvailability =
  | "UNKNOWN"
  | "IN_STOCK"
  | "OUT_OF_STOCK"
  | "LOW_STOCK"
  | "PRE_ORDER";
