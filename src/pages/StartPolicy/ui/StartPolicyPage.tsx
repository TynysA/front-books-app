import 'twin.macro';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderContainer from '@/shared/ui/HeaderContainer/HeaderContainer.tsx';
import { ConfirmationModal } from '@/widgets/ConfirmationModal';
import { IConfirmationModal } from '@/widgets/ConfirmationModal/ui/type.ts';

const StartPolicyPage = () => {
  const [confirmContent, setConfirmContent] = useState<IConfirmationModal>();
  const [confirmOpen, setConfirmOpen] = useState(true);

  const closeModal = () => {
    setConfirmOpen(false);
  };

  return (
    <div tw='bg-root relative pb-[21px] flex flex-col  h-[100dvh]'>
      <HeaderContainer showArrow={false} variant='primary' title={'ОГПО ВТС'} />
      <Outlet context={{ setConfirmContent, setConfirmOpen, confirmOpen }} />
      {confirmOpen && confirmContent && (
        <ConfirmationModal
          title={confirmContent?.title}
          subTitle={confirmContent?.subTitle}
          acceptText={confirmContent?.acceptText}
          cancelText={confirmContent?.cancelText}
          contentType={confirmContent?.contentType}
          colorOfAccept={confirmContent?.colorOfAccept}
          handleAccept={confirmContent.handleAccept}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default StartPolicyPage;
