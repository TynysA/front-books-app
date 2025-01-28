import 'twin.macro';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import IdIcon from '@/shared/assets/icons/IdIcon.tsx';
import { Timer } from '@/shared/ui/timer';
export const ConsentReRegister = () => {
  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const { t } = useTranslation();
  const info = {
    isAdditionalSumma: false
  };
  const handeleNext = event => {
    console.log('handeleReRegister');
    navigate('/re-register/finish');
  };
  const handeleSendSmS = event => {
    console.log('handeleSendSmS');
  };
  const newUsers: any = [
    {
      fullName: 'АХМЕТОВ АБЗАЛ. 9 КЛАСС',
      iin: '891101380908'
    }
    // {
    //   fullName: 'АХМЕТОВ АБЗАЛ. 9 КЛАСС',
    //   iin: '891101380908'
    // }
  ];

  const onResend = async () => {
    console.log('onResend');
    setIsAgree(true);
  };

  return (
    <div tw='px-4 flex-grow flex flex-col justify-between gap-[62px]'>
      <div tw=''>
        <div tw='flex flex-col gap-[16px] mb-[24px]'>
          <div tw='text-primary text-[28px] font-bold'>Cогласие на сбор  и обработку данных</div>
          <div tw='text-secondary text-[16px] flex flex-col gap-[12px]'>
            <p>Чтобы завершить добавление водителя, нужно получить его согласие.</p>
            <p>Мы отправили ему SMS с номера 1414.  Водителю необходимо предоставить согласие ответным сообщением.</p>
            <p tw='text-[#4EBC73]'>Не пришло SMS?</p>
          </div>
        </div>
        {newUsers.map((item: any, idx) => (
          <div key={idx} tw='flex flex-col bg-primary mb-[12px] p-[16px] gap-[16px] text-black rounded-[16px]'>
            <div tw='flex gap-[12px] items-center border-b-[1px] border-[#EAECED] pb-[16px]'>
              <div tw='bg-[#EAECED] rounded-[16px] h-[40px] w-[40px] flex justify-center items-center'>
                <IdIcon />
              </div>
              <div>
                <p tw='text-primary text-[16px] font-semibold'>{item.fullName}</p>
                <span tw='text-secondary text-[13px]'>{item.iin}</span>
              </div>
            </div>
            <div tw='text-primary text-[16px]'>Ожидает подтверждение</div>
            <div tw='text-[#4EBC73] font-medium	'>Скачать согласие</div>
          </div>
        ))}
      </div>
      {isAgree ? (
        <div tw='text-white w-full'>
          <button
            type={'submit'}
            tw='bg-lightGreen w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
            onClick={handeleNext}
          >
            Пероформить
          </button>
        </div>
      ) : (
        <Timer variant={'re-register'} initialSeconds={60} resendOtp={onResend} handele={handeleSendSmS}></Timer>
      )}
    </div>
  );
};
