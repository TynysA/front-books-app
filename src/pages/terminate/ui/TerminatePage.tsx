import 'twin.macro';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderContainer from '@/shared/ui/HeaderContainer/HeaderContainer.tsx';
import { ConfirmationModal } from '@/widgets/ConfirmationModal';
import { IConfirmationModal } from '@/widgets/ConfirmationModal/ui/type.ts';

const TerminatePage = () => {
  const [confirmContent, setConfirmContent] = useState<IConfirmationModal>();
  const [confirmOpen, setConfirmOpen] = useState(true);

  const closeModal = () => {
    setConfirmOpen(false);
  };
  return (
    <div tw='bg-root relative pb-[21px] flex flex-col gap-[24px] h-[100dvh]'>
      <HeaderContainer variant='primary' title={'Расторгнуть договор'} />
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
export default TerminatePage;
