import * as yup from 'yup';

export const loginSchema = t =>
  yup.object({
    username: yup.string().required(t('validations.required')),
    password: yup.string().min(8, t('validations.password-length')).required(t('validations.required'))
  });
