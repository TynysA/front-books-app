import 'twin.macro';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { ButtonSheet } from '@/widgets/ButtonSheet';
import { ISelectOptions } from '@/widgets/ButtonSheet/ui/type.ts';

import { infoSheet } from '../model/constants.ts';

export const StartEntryData = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setConfirmContent, setConfirmOpen, confirmOpen } = useOutletContext();

  const [info, setInfo] = useState();
  const [showInfoButtonSheet, setInfoShowButtonSheet] = useState<boolean>(false);
  const [showSelectButtonSheet, setSelectShowButtonSheet] = useState<boolean>(false);
  const [periodTime, setPeriodTime] = useState<string>('12 месяцев');
  const changePeriodTime = formData => {
    if (formData.label !== periodTime) {
      setPeriodTime(formData.label);
    }
  };
  const options: ISelectOptions[] = [
    { label: '12 месяцев' },
    { label: '11 месяцев' },
    { label: '10 месяцев' },
    { label: '9 месяцев' },
    { label: '8 месяцев' }
  ];

  const openInfo = item => {
    console.log(item);
    setInfo(item);
    setInfoShowButtonSheet(true);
  };

  return (
    <form tw='p-[16px] flex flex-col mt-[24px] flex-grow border-t-[1px] border-[#EAECED]'>
      <div tw='flex flex-col gap-[16px] h-[100%]'>
        <div tw='text-primary text-[28px] font-bold'>Введите данные</div>
        <div tw='text-primary text-[28px] font-bold' onClick={() => openInfo(infoSheet.benefitsAvailable)}>
          strahavatel
        </div>
        <div tw='text-primary text-[28px] font-bold' id='add-car'>
          car
        </div>
        <div tw='text-primary text-[28px] font-bold' id='date'>
          date
        </div>
        <div tw='text-primary text-[28px] font-bold' tw='text-[#FFFFFF] w-full'>
          <button
            type={'submit'}
            tw='bg-[#4EBC73] text-[#FFFFFF] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
          >
            Рассчитать стоимость
          </button>
        </div>
        <ButtonSheet
          show={showSelectButtonSheet}
          type='select'
          defaultValue={periodTime}
          title='Период действия'
          options={options}
          onChange={changePeriodTime}
          onClose={() => setSelectShowButtonSheet(false)}
        />
        <ButtonSheet
          show={showInfoButtonSheet}
          type='info'
          title={info?.title}
          text={info?.text}
          list={info?.list}
          onClose={() => setInfoShowButtonSheet(false)}
        />
      </div>
    </form>
  );
};
