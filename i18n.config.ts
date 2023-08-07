// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// @ts-ignore
import en from "./translations/en.json";
// @ts-ignore
import fr from "./translations/fr.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
  .then((r) => console.log("i18n initialized"));

export default i18n;
