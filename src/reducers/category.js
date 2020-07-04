import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return { isLoading: false, payload: action.payload, error: {} };
    case types.GET_CATEGORIES_FAIL:
      return {
        isLoading: false,
        payload: action.payload,
        error: action.error,
      };
    case types.ISLOADING_CATEGORY:
      return { isLoading: action.isLoading, payload: {}, error: {} };
    default:
      return state;
  }
};
