import * as yup from 'yup';

export const addBookModalSchema = t =>
  yup.object({
    title: yup.string().required(t('validations.required')),
    authors: yup
      .array()
      .of(
        yup.object({
          value: yup.string().required(t('validations.required')),
          label: yup.string().required(t('validations.required'))
        })
      )
      .min(1, t('validations.required')),
    description: yup.string().required(t('validations.required'))
  });
