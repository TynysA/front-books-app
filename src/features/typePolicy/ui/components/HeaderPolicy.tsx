import 'twin.macro';

import WarningIcon from '@/shared/assets/icons/WarningIcon.tsx';

export const HeaderPolicy = ({ price, id }) => {
  return (
    <div tw='py-[24px] px-4 flex flex-col gap-[16px]'>
      <div tw='text-center flex flex-col gap-[8px] leading-none py-[16px]'>
        <div tw='text-[#F7F7F7] text-[13px] font-medium'>Стоймость страховки</div>
        <div tw='text-[#ffffff] text-[32px] font-bold'>{price}</div>
        <div tw='text-[#ffffff] text-[13px] font-medium'>{id}</div>
      </div>
      <div tw='text-[18px] bg-[#FFFFFF26] pt-[14px] flex justify-center items-center gap-[11px] py-[12px] font-semibold text-[#ffffff] rounded-[16px]'>
        <WarningIcon />
        Заявить о страховом случае
      </div>
    </div>
  );
};
