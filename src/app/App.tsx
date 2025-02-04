import { Route, Routes } from 'react-router-dom';

import { useTheme } from '@/config/theme/ThemeProvider.tsx';
import { ConsentReRegister, ReRegisterFinish } from '@/features/reRegister';
import { ReRegister } from '@/features/reRegister/ui/ReRegister.tsx';
import { StartEntryData } from '@/features/startPolicy';
import { TerminationReason } from '@/features/terminate';
import { TypePolicy } from '@/features/typePolicy';
import MainPage from '@/pages/MainPage.tsx';
import ReRegisterPage from '@/pages/ReRegister/ui/ReRegisterPage.tsx';
import StartPolicyPage from '@/pages/StartPolicy/ui/StartPolicyPage.tsx';
import TerminatePage from '@/pages/terminate/ui/TerminatePage.tsx';
import TypePolicyPage from '@/pages/TypePolicy/ui/TypePolicyPage.tsx';
import { pathnames } from '@/shared/lib/constants';

function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <Routes>
      <Route path={pathnames.type_policy} element={<TypePolicyPage />}>
        <Route index element={<TypePolicy />} />
      </Route>
      <Route path={pathnames.re_register} element={<ReRegisterPage />}>
        <Route index element={<ReRegister />} />
        <Route path={pathnames.re_register_finish} element={<ReRegisterFinish />} />
        <Route path={pathnames.re_register_consent} element={<ConsentReRegister />} />
      </Route>
      <Route path={pathnames.terminate} element={<TerminatePage />}>
        <Route index element={<TerminationReason />} />
      </Route>
      <Route path={pathnames.start_policy} element={<StartPolicyPage />}>
        <Route index element={<StartEntryData />} />
      </Route>
      <Route path={pathnames.main} element={<MainPage toggleTheme={toggleTheme} theme={theme} />}></Route>
    </Routes>
  );
}

export default App;
