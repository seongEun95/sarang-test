"use client";

import { createContext, ReactNode, useReducer } from "react";
import { Action, State } from "../types/score";
import { initialState, scoreReducer } from "../lib/scoreReducer";

type ScoreContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  return <ScoreContext.Provider value={{ state, dispatch }}>{children}</ScoreContext.Provider>;
};
