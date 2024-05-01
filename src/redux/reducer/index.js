import { combineReducers } from "redux";
import { productReducer } from "./reducer";

const reducers = combineReducers({
  allproducts: productReducer,
});

export default reducers;