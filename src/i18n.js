import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import React, { Component } from 'react';

//load with browser language
let language = navigator.language || navigator.userLanguage;
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};
i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init(
    {
      resources,
      lng: 'en',
      fallbackLng: 'en',
      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false // react already safes from xss
      },
      react: {
        wait: true,
        nsMode: 'default'
      }
    },
    function() {}
  );
export const I18n = function i18() {
  return i18n;
};
