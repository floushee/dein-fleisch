import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translations.json';
import translationDE from './locales/de/translations.json';

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "de",
        fallbackLng: "de",
        debug: false,

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ","
        },

        react: {
            wait: true
        }
    });

export default i18n;
