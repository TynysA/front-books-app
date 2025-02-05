import 'twin.macro';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { IConfirmationModal } from '@/widgets/ConfirmationModal/ui/type.ts';
const contentTypeStyles = {
  col: tw`flex-col divide-y-[1px]`,
  'col-reverse': tw`flex-col-reverse divide-y-reverse divide-y-[1px]`,
  row: tw`divide-x-[1px]`,
  'row-reverse': tw`flex-row-reverse divide-x-reverse divide-x-[1px]`
};

export const ConfirmationModal = ({
  contentType = 'row',
  cancelText,
  acceptText = 'Accept',
  title = 'Are You Sure',
  subTitle = '',
  colorOfAccept = '#4EBC73',
  handleAccept,
  closeModal
}: IConfirmationModal) => {
  const { t } = useTranslation();
  useEffect(() => {}, []);

  const accept = () => {
    handleAccept();
  };
  const handleClickOutside = () => {
    closeModal();
  };
  return (
    <div tw='absolute top-0 z-[10] w-full h-full bg-[#00000080]' onClick={handleClickOutside}>
      <div
        tw='fixed w-[75%] mx-[auto] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center bg-modal rounded-[12px]'
        onClick={e => e.stopPropagation()}
      >
        <div tw='p-[24px] text-center text-primary text-[18px] font-bold border-b-[1px] border-[#D1D1D6]'>
          <div tw='text-center text-primary text-[18px] font-bold'>{title}</div>
          <div tw='text-center text-[14px] font-medium text-secondary mt-[4px]'>{subTitle}</div>
        </div>
        <div tw='text-[18px] font-bold flex text-center divide-[#E0E0E0]' css={[contentTypeStyles[contentType]]}>
          {cancelText && (
            <div
              tw='text-secondary  text-center  py-[11px]  flex-1'
              css={[(contentType == 'col' || contentType == 'col-reverse') && tw` w-[100%]`]}
              onClick={handleClickOutside}
            >
              {cancelText}
            </div>
          )}
          {acceptText && (
            <div
              tw='text-[#636366]  text-center py-[11px]  flex-1'
              css={[
                (contentType == 'col' || contentType == 'col-reverse') && tw` w-[100%]`,
                colorOfAccept == 'red' && tw`text-[#FF3347]`,
                colorOfAccept == 'green' && tw`text-[#4EBC73]`
              ]}
              onClick={accept}
            >
              {acceptText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
