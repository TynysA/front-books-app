import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
export const ReRegisterFinish = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const info = {
    isAdditionalSumma: false
  };
  const handeleReRegister = event => {
    console.log('handeleReRegister');
    // navigate('/re-register/finish');
    navigate('/re-register/consent');
  };

  return (
    <form tw='text-black flex-grow h-full px-4 flex flex-col justify-between gap-[24px]'>
      <div tw=''>
        <div tw=''>
          <div>Сумма к возврату</div>
          <div>20 000 ₸</div>
        </div>
        <div>
          <div>Счет для возврата</div>
        </div>
      </div>
      <div tw='text-white w-full'>
        <button
          type={'button'}
          tw='bg-[#4EBC73] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
          onClick={handeleReRegister}
        >
          {info.isAdditionalSumma ? 'Оплатить 20 000 ₸' : 'Переоформить полис'}
        </button>
      </div>
    </form>
  );
};
