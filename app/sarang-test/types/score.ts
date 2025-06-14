export type State = {
  scores: Record<string, number>;
};

export type Action = { type: "SELECT_OPTION"; payload: Record<string, number> } | { type: "RESET" };
