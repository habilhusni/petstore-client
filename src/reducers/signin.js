import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return { signedIn: true };
    case types.SIGNIN_FAIL:
      return { signedIn: false, error: action.error };
    default:
      return state;
  }
};
