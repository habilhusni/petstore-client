import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.IS_DRAWER_OPEN:
      return { isDrawerOpen: action.isDrawerOpen };
    default:
      return state;
  }
};
