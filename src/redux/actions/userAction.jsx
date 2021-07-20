import userApi from "../../api/userApi";
import { userConstants, userErrorContants } from "../constants";
import { registerConstants } from "../constants/register.constant";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const infor = await userApi.post({ email, password });
    if (infor.error) {
      dispatch({ type: userErrorContants.ERROR_lOG_IN });
    } else {
      dispatch({ type: userConstants.LOG_IN });
      dispatch({ type: userConstants.GET_USER_INFO, payload: infor });
    }
  };

export const logout = () => {
  return { type: userConstants.LOG_OUT };
};

export const register = (user) => {
  return (dispatch) => {
    if (user) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      dispatch({ type: registerConstants.REGISTER_SUCCESS });
    } else {
      dispatch({ type: registerConstants.REGISTER_FAILURE });
    }
  };
};
