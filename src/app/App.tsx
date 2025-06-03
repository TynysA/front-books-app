import { Fragment, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ProtectedApp from '@/app/ProtectedApp.tsx';
import { useTypedSelector } from '@/app/store';
import Book from '@/features/main/element/Book.tsx';
import LoginPage from '@/pages/LoginPage/LoginPage.tsx';
import RegisterPage from '@/pages/RegisterPage/RegisterPage.tsx';
import WelcomePage from '@/pages/WelcomePage/WelcomePage.tsx';
import { pathnames } from '@/shared/lib/constants';

function AuthChecker({ children }: { children: ReactNode }) {
  const isAuth = useTypedSelector(state => state.auth.isAuth);
  console.log(isAuth);
  if (!isAuth) return <Navigate to={pathnames.login} replace />;
  return children;
}

function App() {
  return (
    <Fragment>
      <ToastContainer theme={'dark'} />
      <Routes>
        <Route path={pathnames.login} element={<LoginPage />} />
        <Route path={pathnames.welcome} element={<WelcomePage />} />
        <Route path={pathnames.book} element={<Book />} />
        <Route path={pathnames.register} element={<RegisterPage />} />
        <Route
          path={'*'}
          element={
            <AuthChecker>
              <ProtectedApp />
            </AuthChecker>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
