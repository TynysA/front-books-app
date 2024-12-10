import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { ITimer } from '../types';

export const Timer = ({
  initialSeconds,
  resendOtp,
  variant = 'otp-verify',
  customText,
  twStyle,
  children,
  handele
}: ITimer) => {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  const handleResendOtp = () => {
    setSeconds(initialSeconds);
    resendOtp();
  };
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  return (
    <div css={[variant === 're-register' && tw`relative `]}>
      {variant === 'otp-verify' && seconds === 0 ? (
        <button
          onClick={handleResendOtp}
          onKeyDown={handleResendOtp}
          aria-hidden='true'
          css={[tw`text-[#3A3A3C]`, twStyle]}
        >
          {t('timer.otp-resend')}
        </button>
      ) : (
        seconds !== 0 && (
          <p
            css={[
              tw`text-[#3A3A3C] text-center`,
              twStyle,
              variant === 're-register' && tw`absolute top-[-16px] w-full`
            ]}
          >{`${customText ?? t('timer.otp-resend-before-num')} ${seconds}`}</p>
        )
      )}
      {handele && (
        <div tw='text-white w-full py-[21px]'>
          <button
            onClick={handleResendOtp}
            tw='bg-[#B8E4C7] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
            css={[seconds === 0 && tw`bg-[#4EBC73]`]}
          >
            Отправить SMS
          </button>
        </div>
      )}
    </div>
  );
};
