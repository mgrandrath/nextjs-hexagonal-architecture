import type { Spaceship } from "@/core/spaceship";
import Image from "next/image";
import type { FC } from "react";

type SpaceshipImageProps = {
  spaceship: Spaceship;
};

export const SpaceshipImage: FC<SpaceshipImageProps> = ({ spaceship }) => {
  return (
    <Image
      src={spaceship.imageUrl}
      alt={spaceship.visualDescription}
      width={400}
      height={400}
      fetchPriority="high"
      loading="eager"
      className="rounded-xl border border-gray-300 bg-black object-contain"
      style={{ width: 400, height: 400 }}
    />
  );
};
