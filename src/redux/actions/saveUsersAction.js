import { apiClient } from "../../api/axiosApi";
import { types } from "../types";

export const startGetUsers = () => {
  return async (dispatch) => {
    try {
      //hacemos lo necesario para que se llame a los usuarios
      const response = await apiClient("/users", "GET");
      const arrayUser = response.data;
      //store the users
      dispatch(saveUsers(arrayUser));
      // disparamos la accion para que se guarden los usuarios
    } catch (e) {
      console.log(e);
    }
  };
};

export function saveUsers(users) {
  return {
    type: types.getUsers,
    payload: users,
  };
}
