import {combineReducers} from "redux";
import signInReducer from "./Authentication/signIn.reducer";
import signUpReducer from "./Authentication/signUp.reducer";

export default combineReducers({
    signInReducer,
    signUpReducer
})