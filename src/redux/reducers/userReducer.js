import setAuthToken from "../../utils/setAuthToken";

import {
  USER_LOGGED_IN,
  USER_REGISTERED,
  LOAD_USER,
  LOG_USER_OUT,
  SET_LOADING_TO_FALSE,
  SET_PASSWORD_RESET,
} from "../actionTypes";

const initialState = {
  isAuth: false,
  isLoading: true,
  id: null,
  admin: false,
  passwordResetValid: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD_RESET:
      return { ...state, passwordResetValid: action.payload };
    case SET_LOADING_TO_FALSE:
      return { ...state, isLoading: false };
    case USER_LOGGED_IN:
    case USER_REGISTERED:
      return { ...state, isLoading: true };
    case LOAD_USER:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        id: action.payload.id,
        admin: action.payload.admin,
        isLoading: false,
      };
    case LOG_USER_OUT: {
      setAuthToken(null);
      return { ...state, isAuth: false, id: null, admin: false };
    }
    default:
      return state;
  }
};

export default userReducer;
