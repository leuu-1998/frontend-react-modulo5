import { apiClient } from "../../api/axiosApi";
import { types } from "../types";

export const startDeleteUser = (_id) => {
  return async (dispatch) => {
    try {
      await apiClient("/users", { _id: _id }, "DELETE");
      dispatch(deleteUser(_id));
    } catch (e) {
      console.log(e);
    }
  };
};

export function deleteUser(_id) {
  return {
    type: types.deleteUser,
    payload: _id,
  };
}
