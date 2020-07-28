import * as types from "../constants";

export const handleDrawerCart = (isDrawerOpen) => ({
  type: types.IS_DRAWER_OPEN,
  isDrawerOpen,
});
