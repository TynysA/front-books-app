import i18n from '@/app/i18n/config';

export const messageByCode = (code: string | number) => {
  switch (code) {
    case 'USER_ALREADY_EXISTS':
      return i18n.t('messages.user-already-exists');
    case 'USER_NOT_FOUND':
      return i18n.t('messages.user-not-found');
    case 'PASSWORD_INVALID':
      return i18n.t('messages.password-invalid');
    case 'CHECK_OTP_ERROR':
      return i18n.t('messages.otp-error');
    case 10001:
      return i18n.t('messages.insurConsult-error');
    default:
      return code;
  }
};
