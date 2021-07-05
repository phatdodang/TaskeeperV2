import {ActionSignInConstants} from '../../constants/index'
import {signInInterface} from '../../actions/index';
import {Action} from '../../actions/index'

const initialSignIp: signInInterface = {
    loginString: '',
    loginInformation: {
        password:'',
        facebookToken:'',
        googleToken:''
    },
    
};

const signInReducer = (state : signInInterface= initialSignIp, action:Action) => {
    switch (action.type) {
      case ActionSignInConstants.SIGN_IN: {
        return {
          ...state
        }
      }
      case ActionSignInConstants.SIGN_IN_SUCCESS: {
        return {
          ...state,
        }
      }
      default: return state;
    }
  
  };
  
  export default signInReducer;
