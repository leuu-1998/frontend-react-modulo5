//no refactoring yet
import { types } from "../types";

export default function listUsersReducer(state = [], action) {
  switch (action.type) {
    case types.deleteUser:
      return state.filter((user) => user._id !== action.payload); // this is not the value, not finish yet
    case types.getUsers:
      return action.payload;
    default:
      return state;
  }
}
