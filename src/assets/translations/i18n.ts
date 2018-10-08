import * as i18n from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import locales from './locales/all'

i18n
    .use(LanguageDetector)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: true,
        // common.json -> Things that are reused everywhere, eg. Button labels 'save', 'cancel'
        // glossary.json -> Words we want to be reused consistent inside texts
        // validation.json -> All validation texts
        ns: ["common", "glossary", "validation"],
        resources: locales,
        interpolation: { escapeValue: false },
        react: { wait: true }
    });

export default i18n;