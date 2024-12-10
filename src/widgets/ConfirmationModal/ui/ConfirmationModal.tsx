import 'twin.macro';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { IConfirmationModal } from '@/widgets/ConfirmationModal/ui/type.ts';

export const ConfirmationModal = ({
  contentType = 'row',
  cancelText = 'Cancel',
  acceptText = 'Accept',
  title = 'Are You Sure',
  subTitle = '',
  colorOfAccept = '#4EBC73',
  handeleAccept = () => {},
  setConfirmOpen
}: IConfirmationModal) => {
  const { t } = useTranslation();
  useEffect(() => {}, []);

  const accept = () => {
    handeleAccept();
  };
  const handleClickOutside = () => {
    setConfirmOpen(false);
  };
  return (
    <div tw='absolute top-0 z-[10] w-full h-full bg-[#00000080]' onClick={handleClickOutside}>
      <div
        tw='fixed w-[75%] mx-[auto] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center bg-[#F7F7F7] rounded-[12px]'
        onClick={e => e.stopPropagation()}
      >
        <div tw='p-[24px] text-center text-[#0F0F0F] text-[18px] font-bold border-b-[1px] border-[#D1D1D6]'>
          {title}
        </div>
        <div
          tw='text-[18px] font-bold flex text-center'
          css={[
            contentType == 'col' && tw`flex-col`,
            contentType == 'col-reverse' && tw`flex-col-reverse`,
            (contentType === 'row' || contentType === 'row-reverse') && tw`divide-x-[1px] divide-[#E0E0E0]`,
            (contentType === 'col' || contentType === 'col-reverse') && tw`divide-y-[1px] divide-[#E0E0E0]`
          ]}
        >
          <div
            tw='text-[#636366] w-[50%] py-[11px]'
            css={[(contentType == 'col' || contentType == 'col-reverse') && tw` w-[100%]`]}
            onClick={handleClickOutside}
          >
            {cancelText}
          </div>
          <div
            tw='text-[#636366] w-[50%] text-center py-[11px]'
            css={[
              (contentType == 'col' || contentType == 'col-reverse') && tw` w-[100%]`,
              colorOfAccept == 'red' && tw`text-[#FF3347]`,
              colorOfAccept == 'green' && tw`text-[#4EBC73]`
            ]}
            onClick={accept}
          >
            {acceptText}
          </div>
        </div>
      </div>
    </div>
  );
};
