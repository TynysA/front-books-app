import * as yup from 'yup';

export const addBookModalSchema = t =>
  yup.object({
    title: yup.string().required(t('validations.required')),
    author: yup.string().required(t('validations.required')),
    description: yup.string().required(t('validations.required'))
  });
