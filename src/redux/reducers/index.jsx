import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { registerReducer } from "./register.reducer";
const rootReducer = combineReducers({
  userReducer,
  registerReducer,
});

export default rootReducer;
