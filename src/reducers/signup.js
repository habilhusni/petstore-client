import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return { signed: true };
    case types.SIGNUP_FAIL:
      return { signed: false, error: action.error };
    default:
      return state;
  }
};
