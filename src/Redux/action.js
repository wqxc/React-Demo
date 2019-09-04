import * as actionTypes from "./actionTypes";

export const increment = param => {
  return {
    type: actionTypes.INCREMENT,
    param
  };
};

export const decrement = param => {
  return {
    type: actionTypes.DECREMENT,
    param
  };
};
