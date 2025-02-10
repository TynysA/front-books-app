import * as yup from 'yup';

export const reRegisterSchema = t =>
  yup.object({
    agreement: yup.bool().oneOf([true], t('validations.checkbox-required')).required(t('validations.required'))
  });

export const policyHolderSchema = t =>
  yup.object({
    users: yup.array().of(
      yup.object().shape({
        iin: yup.string().required(t('validations.required')),
        fullName: yup.string().required(t('validations.required')),
        benefits: yup.boolean().required(t('validations.required')),
        driver: yup.boolean(),
        showDriver: yup.boolean()
      })
    )
  });
