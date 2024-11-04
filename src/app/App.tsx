import { Route, Routes } from 'react-router-dom';

import MainPage from '@/pages/MainPage';
import { pathnames } from '@/shared/lib/constants';

function App() {
  return (
    <Routes>
      <Route path={pathnames.main} element={<MainPage />} />
    </Routes>
  );
}

export default App;
