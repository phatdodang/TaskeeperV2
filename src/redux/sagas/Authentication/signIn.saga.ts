import { takeLatest ,call,put} from 'redux-saga/effects';

import {signInInterface,SigIn} from '../../actions/index'

import {loginUser,getLaco} from '../../../services/api'

import * as action from '../../actions/index';



function* loginUsersRequest(action:SigIn) {
    console.log("Data"+JSON.stringify(action.payload))
    try{
       
        //@ts-ignore
        const response = yield loginUser(action.payload);
        yield console.log(response)    

        return;
    }catch (errors){
        
        yield console.log(`Error -->  ${errors}`)
    }  
}
function* root() {
    yield takeLatest(action.signIn,loginUsersRequest)
}
export default root;
