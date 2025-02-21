import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/app/i18n/locales/en.json';
import ru from '@/app/i18n/locales/ru.json';

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'ru');

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem('lang') ?? 'ru',
  lng: localStorage.getItem('lang') ?? 'ru',
  resources: {
    en: {
      translations: en
    },
    ru: {
      translations: ru
    }
  },
  ns: ['translations', 'corpTranslation'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ru'];

export default i18n;
