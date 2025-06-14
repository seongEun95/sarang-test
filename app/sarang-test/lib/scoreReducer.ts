import { Action, State } from "../types/score";

export const initialState: State = {
  scores: {},
};

export function scoreReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SELECT_OPTION": {
      const newScores = { ...state.scores };
      for (const [code, value] of Object.entries(action.payload)) {
        newScores[code] = (newScores[code] || 0) + value;
      }
      return { ...state, scores: newScores };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
