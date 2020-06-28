import * as types from "../constants";

export const handleGlobalLoading = (isLoading) => ({
  type: types.GLOBAL_LOADING,
  isLoading,
});
