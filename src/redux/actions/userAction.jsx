import userApi from "../../api/userApi";
import { history } from "../../history";
import { userConstants, userErrorContants } from "../constants";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const infor = await userApi.post({ email, password });
    if (infor.error) {
      dispatch({ type: userErrorContants.ERROR_lOG_IN });
    } else {
      console.log("err");
      dispatch({ type: userConstants.LOG_IN });
      dispatch({ type: userConstants.GET_USER_INFO, payload: infor });
    }
  };

export const logout = () => {
  return { type: userConstants.LOG_OUT };
};
