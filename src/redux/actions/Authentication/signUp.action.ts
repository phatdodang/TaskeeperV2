import {ActionSignUpConstants} from '../../constants/index'
import {SignUpInterface,SignUp,signUpSuccessInterface,signUpErrorInterface,SignUpSuccess,SignUpError} from "./signUp.actionType"



export function signUp(payload:SignUpInterface):SignUp{
    return{
        type:ActionSignUpConstants.SIGN_UP,
        payload:payload
    }
  };
  export function signUpSuccess(payload:signUpSuccessInterface):SignUpSuccess{
    return{
        type:ActionSignUpConstants.SIGN_UP_SUCCESS,
        payload:payload
    }
  };
  export function signUpError(payload:signUpErrorInterface):SignUpError{
    return{
        type:ActionSignUpConstants.SIGN_UP_FAIL,
        payload:payload
    }
  };
  