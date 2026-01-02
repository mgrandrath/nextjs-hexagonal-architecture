import type { FC } from "react";
import type { SpaceshipAvailability as SpaceshipAvailabilityType } from "@/core/spaceship";

export type SpaceshipAvailabilityProps = {
  availability: SpaceshipAvailabilityType;
};

const availabilityTextMap: Record<SpaceshipAvailabilityType, string> = {
  UNKNOWN: "⚪️ Unknown",
  IN_STOCK: "🟢 In Stock",
  OUT_OF_STOCK: "🔴 Out of Stock",
  LOW_STOCK: "🟡 Low Stock",
  PRE_ORDER: "🟠 Available for Pre-Order",
};

export const SpaceshipAvailability: FC<SpaceshipAvailabilityProps> = ({
  availability,
}) => {
  return (
    <dl className="grid grid-cols-[1fr_2fr] gap-x-2 gap-y-2 text-sm mb-10">
      <dt className="font-bold text-blue-800">Availability</dt>
      <dd>{availabilityTextMap[availability]}</dd>
    </dl>
  );
};
