import { ActionSignInConstants } from '../../constants/index'
import { Action, signInInterface, signInSuccessInterface, signInErrorInterface } from '../../actions/index';


const initialSigIn: signInInterface = {
  loginString: '',
  loginInformation: {
    password: '',
    facebookToken: '',
    googleToken: ''
  },
}
const initialSigInSuccess: signInSuccessInterface = {
  message: '',
  data: {
    access_token: ''
  }
}
const initialSigInError: signInErrorInterface = {
  status: 0,
  message: ''
}
interface allSignInterface {
  signIn: signInInterface,
  SigInSuccess: signInSuccessInterface,
  SigInError: signInErrorInterface
}

const initial: allSignInterface = {
  signIn: initialSigIn,
  SigInSuccess: initialSigInSuccess,
  SigInError: initialSigInError
};

const signInReducer = (state: allSignInterface = initial, action: Action) => {
  switch (action.type) {
    case ActionSignInConstants.SIGN_IN: {
      return {
        ...state
      }
    }
    case ActionSignInConstants.SIGN_IN_SUCCESS: {
      return {
        ...state,
        SigInSuccess: action.payload
      }
    }
    case ActionSignInConstants.SIGN_IN_FAIL: {

      return {
        ...state,
        SigInError: action.payload
      }
    }
    default: return state;
  }

};

export default signInReducer;
