import { takeLatest ,fork,put} from 'redux-saga/effects';
import sign from './Authentication/signIn.saga';
import SignUp from './Authentication/signUp.saga';

export default function* mySaga() {
    yield fork(sign);
    yield fork(SignUp);
  }