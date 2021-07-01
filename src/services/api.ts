import axios from 'axios';

export interface Language {
    codeDescription: string,
    codeId: number,
    codeValue:string
}

export const getLanguage = async () => {
    const response = await axios.get("https://taskeeperv2.herokuapp.com/codetables/isdcode?languageCode=en_US");
    const result = response.data.data as Language[] ;
    return result
}