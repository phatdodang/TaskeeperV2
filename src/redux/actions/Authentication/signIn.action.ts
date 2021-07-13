import { ActionSignInConstants } from '../../constants/index'
import { signInInterface, SigIn, signInSuccessInterface, SigInSuccess, SigInError, signInErrorInterface } from "./signIn.actionType"



export function signIn(payload: signInInterface): SigIn {
    return {
        type: ActionSignInConstants.SIGN_IN,
        payload: payload
    }
};
export function signInSuccess(payload: signInSuccessInterface): SigInSuccess {
    return {
        type: ActionSignInConstants.SIGN_IN_SUCCESS,
        payload: payload
    }
};
export function signInError(payload: signInErrorInterface): SigInError {
    return {
        type: ActionSignInConstants.SIGN_IN_FAIL,
        payload: payload
    }
};
