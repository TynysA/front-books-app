import 'twin.macro';

import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Books from '@/features/main/books/Books.tsx';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import { pathnames } from '@/shared/lib/constants';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const ProtectedApp = () => {
  return (
    <Suspense fallback={<FullScreenLoader type={'suspense'} />}>
      <div tw='bg-[#4582af] mb-[15px]'>
        <Header />
      </div>
      <Container>
        <Routes>
          <Route path={pathnames.main} element={<MainPage />}>
            <Route index element={<Books />} />
            {/*<Route path={pathnames.scores} element={<Scores />} />*/}
          </Route>
          <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
        </Routes>
      </Container>
    </Suspense>
  );
};

export default ProtectedApp;
