import * as actionType from "./actionType";
import AppDispatcher from "./dispatcher";

export const increment = param => {
  AppDispatcher.dispatch({
    type: actionType.INCREMENT,
    param
  });
};

export const decrement = param => {
  AppDispatcher.dispatch({
    type: actionType.DECREMENT,
    param
  });
};
