import { combineReducers } from "redux";
import user from "./userReducer";
import message from "./modalReducer";
import seed from "./seedReducer";

export default combineReducers({ user, message, seed });
