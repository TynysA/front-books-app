import { Route, Routes } from 'react-router-dom';

import { ConsentReRegister, ReRegisterFinish } from '@/features/reRegister';
import { ReRegister } from '@/features/reRegister/ui/ReRegister.tsx';
import { TypePolicy } from '@/features/typePolicy';
import ReRegisterPage from '@/pages/ReRegister/ui/ReRegisterPage.tsx';
import TypePolicyPage from '@/pages/TypePolicy/ui/TypePolicyPage.tsx';
import { pathnames } from '@/shared/lib/constants';

function App() {
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
    </Routes>
  );
}

export default App;
