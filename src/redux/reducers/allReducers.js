import { combineReducers } from "redux";
//import all reducers
import listUsersReducer from "./listUsersReducer";

export const allReducers = combineReducers({
  listUsers: listUsersReducer,
});
