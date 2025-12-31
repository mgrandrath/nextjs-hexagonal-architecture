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
    <button onClick={loadMoreSpaceships} disabled={isDisabled}>
      Load More Spaceships
    </button>
  );
};
