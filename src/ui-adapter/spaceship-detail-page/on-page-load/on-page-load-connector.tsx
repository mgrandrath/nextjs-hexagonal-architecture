"use client";

import { useEffect, type FC } from "react";
import { useSpaceshipDetailPageStore } from "../spaceship-detail-page-store-provider";
import { selectOnPageLoad } from "../spaceship-detail-page-store";

export const OnPageLoadConnector: FC = () => {
  const onPageLoad = useSpaceshipDetailPageStore(selectOnPageLoad);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  return null;
};
