import { combineReducers } from "redux";

import signup from "./signup";
import loading from "./loading";
import signin from "./signin";

export default combineReducers({
  signup,
  loading,
  signin,
});
