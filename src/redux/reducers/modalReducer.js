import { SET_MESSAGE, CLEAR_MESSAGE } from "../actionTypes";

const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload.message;
    case CLEAR_MESSAGE:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
