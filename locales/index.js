//import libaries
import I18n from 'i18n-js'
import * as Localization from 'expo-localization'
import {Platform, NativeModules } from 'react-native'


const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

//Translation
import vi from './vi.json'
import en from './en.json'

//bind to i18n
I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
  en,
  vi
}

//set app to local phones setting

const getLanguage = async() => {
  try {
    const choice = await Localization.locale
    I18n.locale = choice.substr(0, 2)
    I18n.initAsync()
  } catch (e) {
      console.log('Can not get localization')
  }
}

getLanguage()

//export Module
export function t(name) {
  return I18n.t(name)
}
