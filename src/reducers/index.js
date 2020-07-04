import { combineReducers } from "redux";

import signup from "./signup";
import loading from "./loading";
import signin from "./signin";
import brand from "./brand";
import category from "./category";
import product from "./product";

export default combineReducers({
  signup,
  loading,
  signin,
  brand,
  category,
  product,
});
