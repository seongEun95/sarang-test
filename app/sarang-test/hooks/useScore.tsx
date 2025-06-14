"use client";

import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore는 ScoreProvider 내에서 사용해야 합니다.");
  }
  return context;
};
