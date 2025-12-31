import type { Spaceship } from "@/core/spaceship";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type SpaceshipListProps = {
  spaceships: Spaceship[];
};

export const SpaceshipList: FC<SpaceshipListProps> = ({ spaceships }) => {
  return (
    <ul className="flex flex-wrap gap-8 justify-center list-none p-0 m-0">
      {spaceships.map((spaceship, index) => (
        <SpaceshipCard
          key={spaceship.id}
          spaceship={spaceship}
          isFirstItem={index === 0}
        />
      ))}
    </ul>
  );
};

type SpaceshipListItemProps = {
  spaceship: Spaceship;
  isFirstItem?: boolean;
};

const SpaceshipCard: FC<SpaceshipListItemProps> = ({
  spaceship,
  isFirstItem,
}) => {
  return (
    <li
      className="w-[350px] border-2 border-blue-800 bg-white text-black flex flex-col gap-2 p-4 relative"
      style={{
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        boxShadow: "4px 4px 0 #000080",
      }}
    >
      <Link
        href={`/spaceships/${spaceship.id}`}
        className="block text-xl font-bold text-blue-800 underline mb-2 before:content-[''] before:absolute before:inset-0 before:z-1"
        style={{ letterSpacing: "1px" }}
      >
        {spaceship.name}
      </Link>
      <Image
        src={spaceship.imageUrl}
        width={350}
        height={350}
        alt={spaceship.visualDescription}
        fetchPriority={isFirstItem ? "high" : "auto"}
        loading={isFirstItem ? "eager" : "lazy"}
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
