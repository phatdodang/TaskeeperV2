import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import * as actions from '../actions/index';

import { loginUsersRequest } from './Authentication/signIn.saga'
import { registerUsersRequest } from './Authentication/signUp.saga'

import { ActionSignInConstants } from '../constants/Authentication/signIn.constant'
import { ActionSignUpConstants } from "../constants/Authentication/signUp.constant"


export default function* mySaga() {
  yield all([
    takeLatest(ActionSignInConstants.SIGN_IN, loginUsersRequest),
    takeLatest(ActionSignUpConstants.SIGN_UP, registerUsersRequest),
  ]);

}