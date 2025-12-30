import type { Spaceship } from "@/core/spaceship";
import Image from "next/image";
import type { FC } from "react";

type SpaceshipListProps = {
  spaceships: Spaceship[];
};

export const SpaceshipList: FC<SpaceshipListProps> = ({ spaceships }) => {
  return (
    <ul className="flex flex-wrap gap-8 justify-center list-none p-0 m-0">
      {spaceships.map((spaceship) => (
        <SpaceshipCard key={spaceship.id} spaceship={spaceship} />
      ))}
    </ul>
  );
};

type SpaceshipListItemProps = {
  spaceship: Spaceship;
};

const SpaceshipCard: FC<SpaceshipListItemProps> = ({ spaceship }) => {
  return (
    <li
      className="w-[350px] border-2 border-blue-800 bg-white text-black flex flex-col gap-2 p-4"
      style={{
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        boxShadow: "4px 4px 0 #000080",
      }}
    >
      <span
        className="block text-xl font-bold text-blue-800 underline mb-2"
        style={{ letterSpacing: "1px" }}
      >
        {spaceship.name}
      </span>
      <Image
        src={spaceship.imageUrl}
        width={350}
        height={350}
        alt={spaceship.visualDescription}
        className="border border-blue-800 mb-2"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
          display: "block",
        }}
      />
      <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
        <dt className="font-bold text-blue-800">Role:</dt>
        <dd className="text-black">{spaceship.role}</dd>
        <dt className="font-bold text-blue-800">Length:</dt>
        <dd className="text-black">{spaceship.lengthMeters} m</dd>
        <dt className="font-bold text-blue-800">Crew:</dt>
        <dd className="text-black">{spaceship.crewCount}</dd>
        <dt className="font-bold text-blue-800">Price:</dt>
        <dd className="text-black">
          ₡{spaceship.priceCredits.toLocaleString()}
        </dd>
      </dl>
    </li>
  );
};
