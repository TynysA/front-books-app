import 'twin.macro';

import { Link } from 'react-router-dom';

import { pathnames } from '@/shared/lib/constants.ts';
const MainPage = ({ toggleTheme, theme }) => {
  const changeTheme = () => {
    toggleTheme();
  };
  return (
    <div tw='bg-root p-[16px] overflow-hidden flex flex-col gap-[15px] text-primary'>
      <div tw='text-primary'>
        Change theme:
        <button onClick={changeTheme}> {theme}</button>
      </div>
      <Link to={pathnames.re_register} tw='text-primary'>
        Go to re register page
      </Link>
      <Link to={pathnames.type_policy} tw='text-primary'>
        Go to policy page
      </Link>
      <Link to={pathnames.start_policy} tw='text-primary'>
        Go to add policy page
      </Link>
    </div>
  );
};

export default MainPage;
