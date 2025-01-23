import 'twin.macro';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { IButtonSheet } from '@/widgets/ButtonSheet/ui/type.ts';

export const ButtonSheet = ({ type = 'select', title, options, text }: IButtonSheet) => {
  const { t } = useTranslation();
  useEffect(() => {}, []);
  const handleClickOutside = () => {
    console.log(false);
  };
  return (
    <div tw='fixed  inset-0 top-0 left-0 z-[10] w-full h-full bg-[#00000080]' onClick={handleClickOutside}>
      {type === 'select' && <SelectButtonSheet title={title} options={options} />}
      {type === 'info' && <InfoButtonSheet title={title} text={text} />}
    </div>
  );
};
const SelectButtonSheet = ({ title, options }) => {
  return (
    <div tw='fixed bottom-0 left-0 w-full flex gap-[6px] bg-[#F7F7F7]'>
      <p>{title}</p>
    </div>
  );
};

const InfoButtonSheet = ({ title, text }) => {
  return (
    <div tw='flex gap-[10px] text-left items-center justify-between'>
      <span>{text}</span>
    </div>
  );
};
