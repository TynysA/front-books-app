import 'twin.macro';

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import HeaderContainer from '@/shared/ui/HeaderContainer/HeaderContainer.tsx';
import { ConfirmationModal } from '@/widgets/ConfirmationModal';
import { IConfirmationModal } from '@/widgets/ConfirmationModal/ui/type.ts';

const TypePolicyPage = () => {
  const navigate = useNavigate();

  const [confirmContent, setConfirmContent] = useState<IConfirmationModal>();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const goBackCustomHandler = () => {
    if (confirmOpen) {
      setConfirmContent({
        title: 'Изменения в полисе не будут сохранены',
        cancelText: 'Закрыть',
        acceptText: 'Переоформить',
        contentType: 'row',
        handelAccept: goToTerminate,
        colorOfAccept: 'green'
      });
      console.log('sss');
    } else navigate(-1);
  };
  const goToTerminate = () => {
    navigate('/re-register');
  };

  return (
    <div tw='bg-custom-top-gradient relative'>
      <HeaderContainer
        goBackCustomHandler={goBackCustomHandler}
        variant='secondary'
        title={'ОГПО ВТС'}
        showCloseIcon={false}
      />
      <Outlet context={{ setConfirmContent, setConfirmOpen }} />
      {confirmOpen && confirmContent && (
        <ConfirmationModal
          title={confirmContent?.title}
          subTitle={confirmContent?.subTitle}
          acceptText={confirmContent?.acceptText}
          cancelText={confirmContent?.cancelText}
          contentType={confirmContent?.contentType}
          colorOfAccept={confirmContent?.colorOfAccept}
          handeleAccept={confirmContent.handelAccept}
          setConfirmOpen={setConfirmOpen}
        />
      )}
    </div>
  );
};
export default TypePolicyPage;
