import 'twin.macro';

import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Books from '@/features/main/books/Books.tsx';
import BooksFromUsers from '@/features/main/books/BooksFromUsers.tsx';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import { pathnames } from '@/shared/lib/constants';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const ProtectedApp = () => {
  return (
    <Suspense fallback={<FullScreenLoader type={'suspense'} />}>
      <Header />
      <Container>
        <Routes>
          <Route path={pathnames.main} element={<MainPage />}>
            <Route index element={<Books />} />
            <Route path={pathnames.books_from_users} element={<BooksFromUsers />} />
          </Route>
          <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
        </Routes>
      </Container>
    </Suspense>
  );
};

export default ProtectedApp;
