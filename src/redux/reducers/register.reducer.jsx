import { registerConstants } from "../constants/register.constant";

const initialState = {
  registering: "faild",
};
export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      return { registering: "loading" };
    case registerConstants.REGISTER_SUCCESS:
      return { registering: "success" };
    case registerConstants.REGISTER_FAILURE:
      return { registering: "faild" };
    default:
      return state;
  }
};
