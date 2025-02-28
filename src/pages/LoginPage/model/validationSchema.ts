import * as yup from 'yup';

export const loginSchema = t =>
  yup.object({
    username: yup.string().required(t('validations.required')),
    password: yup.string().min(8, t('validations.password-length')).required(t('validations.required'))
  });

export const registerSchema = t =>
  yup.object({
    username: yup.string().required(t('validations.required')),
    role: yup.string().required(t('validations.required')),
    password: yup.string().min(8, t('validations.password-length')).required(t('validations.required')),
    confirmPassword: yup
      .string()
      .min(8, t('validations.password-length'))
      .test({
        name: 'passwordIdentical',
        exclusive: false,
        params: {},
        message: t('validations.password-confirm'),
        test: function (value) {
          return value === this.parent.password;
        }
      })
      .required(t('validations.required'))
  });
