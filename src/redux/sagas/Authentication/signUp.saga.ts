import { signUpSuccess,signUpError } from './../../actions/Authentication/signUp.action';
import { takeLatest, call, put } from 'redux-saga/effects';

import { SignUpInterface, SignUp } from '../../actions/index'

import { RegisterUser } from '../../../services/api'

import * as action from '../../actions/index';


export function* registerUsersRequest(action: SignUp) {
    //console.log("Data"+JSON.stringify(action.payload))
    try {
        //@ts-ignore 
        const response = yield call(RegisterUser, action.payload)
        yield put(signUpSuccess(response.data));
        return;
    } catch (errors) {
        const result = {
            message: "Registered password or email",
            status:400

        }
        yield put(signUpError(result));
    }
}

