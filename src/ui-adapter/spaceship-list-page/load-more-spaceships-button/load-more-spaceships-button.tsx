import type { FC } from "react";

type LoadMoreSpaceshipsButtonProps = {
  loadMoreSpaceships: () => void;
  isDisabled: boolean;
};

export const LoadMoreSpaceshipsButton: FC<LoadMoreSpaceshipsButtonProps> = ({
  loadMoreSpaceships,
  isDisabled,
}) => {
  return (
    <button
      onClick={loadMoreSpaceships}
      disabled={isDisabled}
      className="w-[350px] border-2 border-blue-800 bg-white text-blue-800 font-bold text-lg p-4 mt-4 rounded-none shadow-[4px_4px_0_#000080] transition-colors duration-150 hover:bg-blue-50 hover:cursor-pointer active:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        boxShadow: "4px 4px 0 #000080",
        letterSpacing: "1px",
      }}
    >
      Load More Spaceships
    </button>
  );
};
