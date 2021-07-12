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
    gender:"",
    languageCode:"",
    __v:0
  }
}
const initialSignUpError: signUpErrorInterface = {
  message: "",
  error:{
    driver: false,
    name: "",
    index: 0,
    code: 0,
    keyPattern: {
        email: 0
    },
    keyValue: {
        email: ""
    }
  }
}

interface allSignUpInterface {
  signIn: SignUpInterface,
  SigInSuccess: signUpSuccessInterface,
  SigInError: signUpErrorInterface
}

const initial: allSignUpInterface = {
  signIn: initialSignUp,
  SigInSuccess: initialSignUpSuccess,
  SigInError: initialSignUpError
};

const signUpReducer = (state : SignUpInterface= initialSignUp, action:ActionSignUp) => {
    switch (action.type) {
      case ActionSignUpConstants.SIGN_UP: {
        return {
          ...state
        }
      }
      case ActionSignUpConstants.SIGN_UP_SUCCESS: {
        return {
          ...state,
        }
      }
      default: return state;
    }
  
  };
  
  export default signUpReducer;