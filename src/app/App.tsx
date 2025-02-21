import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedApp from '@/app/ProtectedApp.tsx';
import LoginPage from '@/pages/LoginPage/LoginPage.tsx';
import { pathnames } from '@/shared/lib/constants';

function AuthChecker({ children }: { children: ReactNode }) {
  // const isAuth = useTypedSelector(state => state.auth.isAuth);
  const isAuth = true;
  if (!isAuth) return <Navigate to={pathnames.login} replace />;
  return children;
}

function App() {
  // const { toggleTheme, theme } = useTheme();
  return (
    <Routes>
      <Route path={pathnames.login} element={<LoginPage />} />
      {/*  <Route path={pathnames.register} element={<RegisterPage} />*/}
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
