import { types } from "../types";

export function deleteUser(_id) {
  return {
    type: types.deleteUser,
    payload: _id,
  };
}
