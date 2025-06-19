import 'twin.macro';

import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Books from '@/features/main/books/Books.tsx';
import BooksFromUsers from '@/features/main/books/BooksFromUsers.tsx';
import ProfileInfo from '@/features/profile/info/ProfileInfo.tsx';
import Library from '@/features/profile/library/Library.tsx';
import Liked from '@/features/profile/liked/Liked.tsx';
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
          <Route index element={<Books />} />
          <Route path={pathnames.books_from_users} element={<BooksFromUsers />} />
        </Route>
        <Route path={pathnames.profile} element={<ProfilePage />}>
          <Route index element={<ProfileInfo />} />
          <Route path={pathnames.library} element={<Library />} />
          <Route path={pathnames.liked} element={<Liked />} />
        </Route>
        <Route path={'/*'} element={<Navigate to={pathnames.main} replace />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedApp;
