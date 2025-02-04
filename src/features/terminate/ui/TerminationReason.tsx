import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';
import tw from 'twin.macro';

import { reRegisterSchema } from '@/features/reRegister';
import ChosenIcon from '@/shared/assets/icons/ChosenIcon.tsx';
import Checkbox from '@/shared/ui/Checkbox/Checkbox.tsx';

export const TerminationReason = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setConfirmContent, setConfirmOpen, confirmOpen } = useOutletContext();
  const terminationReasons = [
    {
      name: t('terminationReasons.something-happened'),
      id: 1
    },
    {
      name: t('terminationReasons.at-will'),
      id: 2
    }
  ];

  const [selectedReason, setSelectedReason] = useState();
  const [showInfo, setShowInfo] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(reRegisterSchema(t)),
    defaultValues: {
      agreement: true
    }
  });

  const handleTerminate = () => {
    const errorText1 = 'Транспортное средство не снято с учета';
    const errorText2 = 'Возврат средств возможен если с момента оформления полиса прошло более 14 дней';
    setConfirmOpen(true);
    setConfirmContent({
      title: errorText2,
      acceptText: 'Ok',
      contentType: 'row',
      handleAccept: errorRemove,
      colorOfAccept: 'green'
    });
  };
  const errorRemove = () => {
    setConfirmOpen(false);
  };

  return (
    <form tw='px-[16px] flex flex-col gap-[24px] mt-[24px] flex-grow' onSubmit={handleSubmit(handleTerminate)}>
      <div tw='flex flex-col gap-[16px] h-[100%]'>
        <div tw='text-primary text-[28px] font-bold'>Выберите причину расторжения договора</div>
        <div tw='text-secondary text-[16px] flex flex-col gap-[12px]'>
          <p>
            Важно! При добровольном отказе от договора, если это не связано с обстоятельствами, указанными в части
            первой пункта 1 статьи 841
          </p>
          <p>
            Гражданского кодекса РК, в частях второй и третьей настоящего пункта, уплаченные страховщику страховая
            премия либо страховые взносы не подлежат возврату.
          </p>
        </div>
        <div tw='flex flex-col bg-primary p-[16px] text-primary rounded-[12px]'>
          {terminationReasons.map(reason => (
            <div
              tw='px-[16px] py-[12px] flex justify-between items-center'
              css={[selectedReason?.id == reason?.id && tw`text-[#4EBC73]`]}
              onClick={() => {
                setSelectedReason(reason);
                setShowInfo(true);
              }}
            >
              <p>{reason.name}</p>
              <div>{selectedReason?.id == reason?.id && <ChosenIcon />}</div>
            </div>
          ))}
        </div>
        {showInfo && (
          <div tw='flex mt-[10px] bg-primary justify-between py-[15px] px-[16px] text-primary rounded-[12px]'>
            <div tw='text-secondary'>Сумма к возврату</div>
            <div>20 000 ₸</div>
          </div>
        )}
        {showInfo && (
          <Checkbox
            showErrorBlock={false}
            variant={'small'}
            control={control}
            name='agreement'
            disabled={false}
            label={'Расторгнуть без возврата премии'}
          />
        )}
        {showInfo && (
          <button
            type={'submit'}
            disabled={!isValid}
            tw='bg-[#4EBC73] text-[#FFFFFF] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
            css={[!isValid && tw`bg-[#B8E4C7]`]}
          >
            Продолжить
          </button>
        )}
      </div>
    </form>
  );
};
