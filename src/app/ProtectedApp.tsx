import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainPage from '@/pages/MainPage.tsx';
import { pathnames } from '@/shared/lib/constants';
import Header from '@/shared/ui/Header';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const ProtectedApp = () => {
  return (
    <Suspense fallback={<FullScreenLoader type={'suspense'} />}>
      <Header />
      <Routes>
        <Route path={pathnames.main} element={<MainPage />} />
        <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedApp;
