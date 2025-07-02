import * as yup from 'yup';

export const commentSchema = t =>
  yup.object({
    comment: yup.string().required(t('validations.required'))
  });
