import axios from 'axios';
import {signInInterface,SignUpInterface} from "../redux/actions/index"

export interface Language {
    codeDescription: string,
    codeId: number,
    codeValue:string,
    national:string
}
const URL = "https://taskeeperv2.herokuapp.com"



export const getLanguage = async () => {
    const response = await axios.get(`https://taskeeperv2.herokuapp.com/codetables/isdcode?languageCode=en_US`);
    const result = response.data.data as Language[] ;
    return result
}

export const loginUser = (payload:signInInterface) => {
    return  axios.post(`${URL}/auth/login`,payload);
};

export const RegisterUser = (payload:SignUpInterface) => {
    return  axios.post(`${URL}/users/create`,payload);
};

export const getLaco = () => {
    return  axios.get(`https://taskeeperv2.herokuapp.com/codetables/isdcode?languageCode=en_US`);
};
