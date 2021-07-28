import {ActionSignUpConstants} from '../../constants/index'


export interface LoginInformationInterface {
   password:String,
   googleToken:String | undefined,
   facebookToken:String | undefined,
} 

export interface PhoneNumberInterface {
    ISD_CodeId:String,
    phoneNumber:String
 } 

export interface SignUpInterface {
    firstName:String | undefined,
    lastName:String | undefined,
    email:String | undefined,
    dayOfBirth:Number,
    monthOfBirth:Number,
    yearOfBirth:Number,
    phoneNumber:PhoneNumberInterface,
    loginInformation:LoginInformationInterface,
    avatar:String | undefined,
    gender:String
}

export interface UserInformationInterface {
    accountType:String,
    accountStatus:String,
    createdAt:String,
    _id:String,
    firstName:String,
    lastName:String,
    email:String,
    dayOfBirth:number,
    monthOfBirth:number,
    yearOfBirth:number,
    phoneNumber:PhoneNumberInterface,
    avatar:String,
    gender:String,
    languageCode:String,
    __v:number
}

export interface ErrorInformationInterface {
    driver: boolean,
    name: String,
    index: Number,
    code: Number,
    keyPattern: {
        email: Number
    },
    keyValue: {
        email: String
    }
}

export interface signUpSuccessInterface {
    message: string;
    data:UserInformationInterface
}

export interface signUpErrorInterface {
    message: string;
    status:number;
}

export interface SignUp {
    type:ActionSignUpConstants.SIGN_UP,
    payload:SignUpInterface
}
export interface SignUpSuccess {
    type:ActionSignUpConstants.SIGN_UP_SUCCESS,
    payload:signUpSuccessInterface
}
export interface SignUpError {
    type:ActionSignUpConstants.SIGN_UP_FAIL,
    payload:signUpErrorInterface
}

export type ActionSignUp = SignUp | SignUpSuccess | SignUpError;

