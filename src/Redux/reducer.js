import * as actionTypes from "./actionTypes";
let reducer = (state, action) => {
  const { param } = action;
  if (action.type == actionTypes.INCREMENT) {
    return {
      ...state,
      ["num"]: state["num"] + param
    };
  } else if (action.type == actionTypes.DECREMENT) {
    return {
      ...state,
      ["num"]: state["num"] - param
    };
  }
  return state;
};

export default reducer;
