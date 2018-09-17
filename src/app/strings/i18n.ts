import * as i18n from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import locales from './locales/all'

i18n
    .use(LanguageDetector)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: true,
        ns: ["common", "glossary", "validation"],
        resources: locales,
        interpolation: { escapeValue: false },
        react: { wait: true }
    });

export default i18n;