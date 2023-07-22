import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../assets/locales/en/translation.json';
import esTranslation from '../../assets/locales/es/translation.json';
import ptTranslation from '../../assets/locales/pt/translation.json';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    pt: { translation: ptTranslation },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translations: typeof enTranslation;
    };
  }
}

export default i18n;
