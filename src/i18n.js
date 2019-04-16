import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// the translations
let language;
function sendRequest(resources) {
  // console.log('resources', resources);
  i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init(
      {
        resources,
        lng: language,
        fallbackLng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
          escapeValue: false // react already safes from xss
        }
      },
      function() {
        //Change the language based on the response from server
        fetch('http://localhost:3100/getLang')
          .then(data => data.json())
          .then(res => {
            // console.log(res);
            language = res.lang;
            i18n.changeLanguage(language, (err, t) => {
              if (err)
                return console.log(
                  'something went wrong loading the language',
                  err
                );
            });
          });
      }
    );
  return i18n;
}
function i18() {
  const resources = {
    en: {
      translation: translationEN
    },
    de: {
      translation: translationDE
    }
  };
  return sendRequest(resources);
}
export default i18();
