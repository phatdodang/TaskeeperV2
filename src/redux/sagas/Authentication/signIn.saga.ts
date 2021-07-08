import { takeLatest, call, put } from 'redux-saga/effects';

import { signInInterface, SigIn } from '../../actions/index'

import { loginUser, getLaco } from '../../../services/api'

import * as action from '../../actions/index';
import { signInSuccess } from '../../actions/Authentication/signIn.action';



function* loginUsersRequest(action: SigIn) {
    try {
        //@ts-ignore
        const response = yield call(loginUser, action.payload)
        if (response.status == 202) {
            yield put(signInSuccess(response.data));
            return;
        }
    } catch (errors) {
        yield console.log(`Error --> ${errors}`)
    }
}
function* root() {
    yield takeLatest(action.signIn, loginUsersRequest)
}
export default root;
