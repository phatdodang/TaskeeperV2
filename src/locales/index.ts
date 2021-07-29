import en from './en'
import vi from './vi'
import I18n from 'i18n-js';
import * as Localization from 'expo-localization';

I18n.translations = {
    en,
    vi
}

const getLanguage = async() =>{
    const choice = await Localization.locale
    I18n.locale = choice.substr(0,2)
}

getLanguage()

export function t(name:string){
    return I18n.t(name)
}