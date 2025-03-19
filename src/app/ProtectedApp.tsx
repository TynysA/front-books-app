import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Books from '@/features/main/books/Books.tsx';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import { pathnames } from '@/shared/lib/constants';
import Header from '@/shared/ui/Header';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const ProtectedApp = () => {
  return (
    <Suspense fallback={<FullScreenLoader type={'suspense'} />}>
      <Header />
      <Routes>
        <Route path={pathnames.main} element={<MainPage />}>
          <Route index element={<Books />} />
          {/*<Route path={pathnames.scores} element={<Scores />} />*/}
        </Route>
        <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedApp;
