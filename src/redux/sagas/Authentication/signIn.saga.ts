import { call, put } from 'redux-saga/effects';

import { SigIn } from '../../actions/index'

import { loginUser } from '../../../services/api'

import { signInSuccess, } from '../../actions/Authentication/signIn.action';




export function* loginUsersRequest(action: SigIn) {
    try {
        //@ts-ignore
        const response = yield call(loginUser, action.payload)
        if (response.status == 202) {
            yield put(signInSuccess(response.data));
            return;
        }
    } catch (errors) {
        yield console.log(`Error --> ${JSON.stringify(errors)}`)
    }
}

