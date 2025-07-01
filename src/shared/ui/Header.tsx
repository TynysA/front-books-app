import 'twin.macro';

import { Link } from 'react-router-dom';

import { useTypedSelector } from '@/app/store';
import { pathnames } from '@/shared/lib/constants';
import Container from '@/shared/ui/Container/Container.tsx';
import { LangSwitcher, ThemeSwitcher } from '@/shared/ui/Switchers';
import UserMenu from '@/shared/ui/Switchers/UserMenu/UserMenu.tsx';

const Header = () => {
  const { isAuth, user } = useTypedSelector(state => state.auth);

  const handleSearch = async value => {
    console.log(value);
  };
  return (
    <div tw='bg-[#4582af] '>
      <Container>
        <div tw='pt-[3px] pb-[15px] flex justify-between  items-center gap-[30px] text-[#fff] text-[12px] font-black leading-[16px] tracking-[1px] uppercase'>
          <Link to={pathnames.welcome} tw='text-[14px] lowercase font-semibold'>
            <span tw='uppercase font-black'>B</span>ooks 📖
            <span tw='uppercase font-black'>C</span>
            astle🏰
          </Link>
          <div tw='flex gap-[20px]  items-center'>
            <div tw='flex gap-[15px] hidden'>
              <div id={'search'}>
                <input
                  tw='outline-none border-[1px] border-[#00000080] rounded-[8px] py-[5px] px-[15px] bg-white'
                  type='search'
                  onChange={handleSearch}
                />
              </div>
            </div>
            <ThemeSwitcher />
            <LangSwitcher />
            {/*<button onClick={handleLogout} tw='p-[5px] uppercase'>*/}
            {/*  {isAuth ? t('header.logout') : t('auth.login')}*/}
            {/*</button>*/}
            <UserMenu isAuth={isAuth} user={user} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
