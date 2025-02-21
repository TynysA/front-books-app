import 'twin.macro';

import { Outlet } from 'react-router-dom';

import Layout from '@/shared/ui/Layout/Layout.tsx';

const MainPage = () => {
  return (
    <Layout sidebarContent={[]}>
      <div tw='p-[30px]'>
        <Outlet />
      </div>
    </Layout>
  );
};

export default MainPage;
