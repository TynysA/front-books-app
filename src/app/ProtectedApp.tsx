import 'twin.macro';

import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import BooksFromAdmin from '@/features/main/books/BooksFromAdmin.tsx';
import BooksFromUsers from '@/features/main/books/BooksFromUsers.tsx';
import { LibraryPage, LikedPage, ProfileInfoPage } from '@/features/profile';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import ProfilePage from '@/pages/ProfilePage/ProfilePage.tsx';
import { pathnames } from '@/shared/lib/constants';
import Header from '@/shared/ui/Header';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const ProtectedApp = () => {
  return (
    <Suspense fallback={<FullScreenLoader type={'suspense'} />}>
      <Header />
      <Routes>
        <Route path={pathnames.main} element={<MainPage />}>
          <Route index element={<BooksFromAdmin />} />
          <Route path={pathnames.books_from_users} element={<BooksFromUsers />} />
        </Route>
        <Route path={pathnames.profile} element={<ProfilePage />}>
          <Route index element={<ProfileInfoPage />} />
          <Route path={pathnames.library} element={<LibraryPage />} />
          <Route path={pathnames.liked} element={<LikedPage />} />
        </Route>
        <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedApp;
