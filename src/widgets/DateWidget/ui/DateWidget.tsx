import 'twin.macro';

import Calendar from '@/shared/assets/icons/Calendar.tsx';
import Expand from '@/shared/assets/icons/Expand.tsx';
import { IDateWidgetProps } from '@/widgets/DateWidget/model/type.ts';

export const DateWidget = (props: IDateWidgetProps) => {
  return (
    <div tw='bg-primary flex flex-col gap-[24px] p-4 rounded-[16px] shadow-nav-menu'>
      <div>
        <h3 tw='text-secondary text-[13px] font-medium mb-[12px]'>Дата начала действия полиса</h3>
        <button
          type='button'
          tw='flex justify-between text-[16px] text-primary font-normal bg-fourthly px-[16px] py-[14px] w-full rounded-[16px]'
          onClick={() => props.setShowDateButtonSheet(true)}
        >
          <div>{props.startDate.toLocaleDateString('ru-RU')}</div>
          <Calendar fill={'var(--font-primary)'} />
        </button>
      </div>

      <div>
        <h3 tw='text-secondary text-[13px] font-medium mb-[12px]'>Период действия</h3>
        <button
          type='button'
          tw='flex justify-between text-[16px] text-primary font-normal bg-fourthly px-[16px] py-[14px] w-full rounded-[16px]'
          onClick={() => props.setSelectShowButtonSheet(true)}
        >
          <div>{props.periodTime}</div>
          <Expand fill={'var(--font-primary)'} />
        </button>
      </div>
    </div>
  );
};
