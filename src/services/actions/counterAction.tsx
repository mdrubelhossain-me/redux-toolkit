import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

//action
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
//action
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
//action
export const reset = () => {
  return {
    type: RESET,
  };
};
