import * as yup from 'yup';

export const reRegisterSchema = t =>
  yup.object({
    agreement: yup.bool().oneOf([true], t('validations.checkbox-required')).required(t('validations.required'))
  });
