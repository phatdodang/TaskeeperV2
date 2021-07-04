import {ActionSignInConstants} from '../../constants/index'


export interface loginInformationInterface {
   password:String,
   facebookToken:String,
   googleToken:String
} 

export interface signInInterface {
    loginString: string;
    loginInformation:loginInformationInterface
}

export interface userInformationInterface {
    accountType:String,
    userStatus:String,
    createdAt:String,
    _id:String,
    firstName:String,
    lastName:String
}

export interface signInSuccessInterface {
    message: string;
    user:userInformationInterface
}

export interface SigIn {
    type:ActionSignInConstants.SIGN_IN,
    payload:signInInterface
}
interface SigInSuccess {
    type:ActionSignInConstants.SIGN_IN_SUCCESS,
    payload:signInSuccessInterface
}
interface SigInError {
    type:ActionSignInConstants.SIGN_IN_FAIL,
    payload:signInInterface
}

export type Action = SigIn | SigInSuccess | SigInError;

