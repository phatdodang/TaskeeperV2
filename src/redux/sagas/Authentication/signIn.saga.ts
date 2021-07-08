import { takeLatest, call, put } from 'redux-saga/effects';

import { signInInterface, SigIn } from '../../actions/index'

import { loginUser, getLaco } from '../../../services/api'

import * as action from '../../actions/index';
import { signInSuccess, } from '../../actions/Authentication/signIn.action';
import { signInSuccessInterface } from '../../actions/index'



function* loginUsersRequest(action: SigIn) {
    try {
        //@ts-ignore
        const response = yield call(loginUser, action.payload)
        const dataSend: signInSuccessInterface = response.data;
        if (response.status == 202) {
            yield put(signInSuccess(dataSend));
            return;
        }
    } catch (errors) {
        yield console.log(`Error --> ${JSON.stringify(errors)}`)
    }
}
function* root() {
    yield takeLatest(action.signIn, loginUsersRequest)
}
export default root;
