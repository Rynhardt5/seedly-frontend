import { SET_MESSAGE, CLEAR_MESSAGE } from "../actionTypes";

export const setMessage = (message) => (dispatch) => {
  console.log(message);
  dispatch({
    type: SET_MESSAGE,
    payload: message,
  });
};

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGE,
  });
};
