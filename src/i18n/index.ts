
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en';
import ptTranslation from './locales/pt';
import esTranslation from './locales/es';
import frTranslation from './locales/fr';
import itTranslation from './locales/it';
import zhTranslation from './locales/zh';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
      it: { translation: itTranslation },
      zh: { translation: zhTranslation },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
