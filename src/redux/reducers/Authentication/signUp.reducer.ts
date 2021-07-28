import {ActionSignUpConstants} from '../../constants/index'
import {ActionSignUp,SignUpInterface,signUpSuccessInterface,signUpErrorInterface} from '../../actions/index';

const initialSignUp: SignUpInterface = {
    firstName : "",
    lastName: "",
    email: "",
    dayOfBirth: 0,
    monthOfBirth: 0,
    yearOfBirth: 0,
    phoneNumber: {
        ISD_CodeId: "",
        phoneNumber: ""
    },
    loginInformation: {
        password: "",
        googleToken: "",
        facebookToken: ""
    },
    avatar:"",
    gender: ""
};

const initialSignUpSuccess: signUpSuccessInterface = {
  message: '',
  data: {
    accountType:"",
    accountStatus:"",
    createdAt:"",
    _id:"",
    firstName:"",
    lastName:"",
    email:"",
    dayOfBirth:0,
    monthOfBirth:0,
    yearOfBirth:0,
    phoneNumber:{
      ISD_CodeId: "",
      phoneNumber: ""
    },
    avatar:"",
    gender:"",
    languageCode:"",
    __v:0
  }
}
const initialSignUpError: signUpErrorInterface = {
  message: "",
  status:0
}

interface allSignUpInterface {
  signUp: SignUpInterface,
  SignUpSuccess: signUpSuccessInterface,
  SignUpError: signUpErrorInterface
}

const initial: allSignUpInterface = {
  signUp: initialSignUp,
  SignUpSuccess: initialSignUpSuccess,
  SignUpError: initialSignUpError
};

const signUpReducer = (state : allSignUpInterface= initial, action:ActionSignUp) => {
    switch (action.type) {
      case ActionSignUpConstants.SIGN_UP: {
        return {
          ...state
        }
      }
      case ActionSignUpConstants.SIGN_UP_SUCCESS: {
        return {
          ...state,
          SignUpSuccess:action.payload
        }
      }
      case ActionSignUpConstants.SIGN_UP_FAIL: {
        return {
          ...state,
          SignUpError:action.payload
        }
      }
      default: return state;
    }
  
  };
  
  export default signUpReducer;