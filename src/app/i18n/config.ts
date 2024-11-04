import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import kk from '@/app/i18n/locales/kk.json';
import ru from '@/app/i18n/locales/ru.json';

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'ru');

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem('lang') ?? 'ru',
  lng: localStorage.getItem('lang') ?? 'ru',
  resources: {
    kk: {
      translations: kk
    },
    ru: {
      translations: ru
    }
  },
  ns: ['translations', 'corpTranslation'],
  defaultNS: 'translations'
});

i18n.languages = ['kk', 'ru'];

export default i18n;
