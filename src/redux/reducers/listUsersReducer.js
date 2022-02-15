//no refactoring yet
import { types } from "../types";

export default function listUsersReducer(state = [], action) {
  switch (action.type) {
    case types.deleteUser:
      return action.payload.submittedValue; // this is not the value, not finish yet
    case types.getUsers:
      return action.payload;
    default:
      return state;
  }
}
