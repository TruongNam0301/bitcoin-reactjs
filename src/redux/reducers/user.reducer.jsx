import { userConstants } from "../constants";

const initialState = {
  loggedIn: false,
  userInfo: {
    email: "",
    name: "",
    id: "",
    token: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOG_IN:
      return { ...state, loggedIn: true };
    case userConstants.GET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case userConstants.LOG_OUT:
      return initialState;
    default: {
      return state;
    }
  }
};

export default userReducer;
