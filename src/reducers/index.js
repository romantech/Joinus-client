import { combineReducers } from "redux";
import newProjectReducer from "./newProjectReducer.js";
import userInfoReducer from "./userInfoReducer.js";
import loginReducer from "./loginReducer.js";
import tokenReducer from "./tokenReducer.js";
import tagDataReducer from "./tagDataReducer.js";

const rootReducer = combineReducers({
  newProjectReducer,
  userInfoReducer,
  loginReducer,
  tokenReducer,
  tagDataReducer,
});

export default rootReducer;
