import 'twin.macro';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SIDEBAR_ITEMS } from '@/pages/MainPage/model';
import Layout from '@/shared/ui/Layout/Layout.tsx';
import { ModalWindow } from '@/widgets/ModalWindow';
import Container from '@/shared/ui/Container/Container.tsx';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState('');
  return (
    <Container>
      <div tw='mt-[15px]'>
        <Layout sidebarContent={SIDEBAR_ITEMS}>
          {isModalOpen && <ModalWindow type={modalType} setIsModalOpen={setIsModalOpen} modalContent={modalContent} />}{' '}
          <div tw='mb-[15px]'>
            <Outlet context={{ setIsModalOpen, setModalContent, setModalType }} />
          </div>
        </Layout>
      </div>
    </Container>
  );
};

export default MainPage;
