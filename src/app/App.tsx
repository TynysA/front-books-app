import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedApp from '@/app/ProtectedApp.tsx';
import { useTypedSelector } from '@/app/store';
import LoginPage from '@/pages/LoginPage/LoginPage.tsx';
import RegisterPage from '@/pages/RegisterPage/RegisterPage.tsx';
import WelcomePage from '@/pages/WelcomePage/WelcomePage.tsx';
import { pathnames } from '@/shared/lib/constants';

function AuthChecker({ children }: { children: ReactNode }) {
  const isAuth1 = useTypedSelector(state => state.auth.isAuth);
  const isAuth2 = useSelector((state: RootState) => state.auth.isAuth);
  if (!isAuth1) return <Navigate to={pathnames.login} replace />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path={pathnames.login} element={<LoginPage />} />
      <Route path={pathnames.welcome} element={<WelcomePage />} />
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
  );
}

export default App;
