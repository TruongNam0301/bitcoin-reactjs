import { userConstants, userErrorContants } from "../constants";

const initialState = {
  loggedIn: false,
  userInfo: {
    email: "",
    name: "",
    id: "",
    token: "",
  },
  error: "empty",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOG_IN:
      return { ...state, loggedIn: true, error: "no" };
    case userErrorContants.ERROR_lOG_IN:
      return { ...state, loggedIn: false, error: "yes" };
    case userConstants.GET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case userConstants.LOG_OUT:
      return { ...state, error: "empty", loggedIn: false };
    default: {
      return state;
    }
  }
};
