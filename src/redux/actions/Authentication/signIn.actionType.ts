import { ActionSignInConstants } from '../../constants/index'


export interface loginInformationInterface {
    password: String,
    facebookToken: String,
    googleToken: String
}

export interface signInInterface {
    loginString: string;
    loginInformation: loginInformationInterface
}

export interface userInformationInterface {
    accountType: String,
    userStatus: String,
    createdAt: String,
    _id: String,
    firstName: String,
    lastName: String
}
export interface tokenSignIn {
    access_token: String
}

export interface signInSuccessInterface {
    message: string;
    data: tokenSignIn
}
export interface signInErrorInterface {
    status: String;
    message: String
}
export interface SigIn {
    type: ActionSignInConstants.SIGN_IN,
    payload: signInInterface
}
export interface SigInSuccess {
    type: ActionSignInConstants.SIGN_IN_SUCCESS,
    payload: signInSuccessInterface
}
export interface SigInError {
    type: ActionSignInConstants.SIGN_IN_FAIL,
    payload: signInErrorInterface
}

export type Action = SigIn | SigInSuccess | SigInError;


