"use client";

import type { FC } from "react";
import { LoadMoreSpaceshipsButton } from "./load-more-spaceships-button";
import { useSpaceshipListPageStore } from "../spaceship-list-page-store-provider";
import {
  selectIsLoadMoreButtonDisabled,
  selectLoadMoreSpaceships,
} from "../spaceship-list-page-store";

export const LoadMoreSpaceshipsButtonConnector: FC = () => {
  const loadMoreSpaceships = useSpaceshipListPageStore(
    selectLoadMoreSpaceships,
  );
  const isLoadMoreButtonDisabled = useSpaceshipListPageStore(
    selectIsLoadMoreButtonDisabled,
  );

  return (
    <LoadMoreSpaceshipsButton
      loadMoreSpaceships={loadMoreSpaceships}
      isDisabled={isLoadMoreButtonDisabled}
    />
  );
};
