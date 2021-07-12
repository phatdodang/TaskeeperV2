import { takeLatest, call, put } from 'redux-saga/effects';

import { SignUpInterface, SignUp } from '../../actions/index'

import { RegisterUser } from '../../../services/api'

import * as action from '../../actions/index';


export function* registerUsersRequest(action: SignUp) {
    //console.log("Data"+JSON.stringify(action.payload))
    try {
        const data: SignUpInterface = action.payload
        //@ts-ignore 
        const response = yield call(RegisterUser, data)
        console.log(response.data)
        return;
    } catch (errors) {

        yield console.log(`Error -->  ${errors}`)
    }
}

