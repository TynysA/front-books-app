import { Route, Routes } from 'react-router-dom';

import { useTheme } from '@/config/theme/ThemeProvider.tsx';
import MainPage from '@/pages/MainPage.tsx';
import { pathnames } from '@/shared/lib/constants';

function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <Routes>
      {/*<Route path={pathnames.login} element={<LoginPage} />*/}
      {/*  <Route path={pathnames.register} element={<RegisterPage} />*/}
      <Route path={pathnames.main} element={<MainPage toggleTheme={toggleTheme} theme={theme} />}></Route>
    </Routes>
  );
}

export default App;
