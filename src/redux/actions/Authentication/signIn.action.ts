import {ActionSignInConstants} from '../../constants/index'
import {signInInterface,SigIn} from "./signIn.actionType"



export function signIn(payload:signInInterface):SigIn{
    return{
        type:ActionSignInConstants.SIGN_IN,
        payload:payload
    }
  };
export type State = ReturnType<typeof signIn>;