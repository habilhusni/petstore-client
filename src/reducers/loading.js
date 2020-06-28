import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GLOBAL_LOADING:
      return { isLoading: action.isLoading };
    default:
      return state;
  }
};
