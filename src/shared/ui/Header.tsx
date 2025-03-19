import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from '@/app/store';
import { setAuth } from '@/entities/user';
import { pathnames } from '@/shared/lib/constants';
import Container from '@/shared/ui/Container/Container.tsx';
import { LangSwitcher, ThemeSwitcher } from '@/shared/ui/Switchers';

const Header = () => {
  const { t } = useTranslation();
  const { isAuth } = useTypedSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  // const { user } = useTypedSelector(state => state.auth);

  const handleLogout = async () => {
    try {
      dispatch(setAuth(false));
      navigate(pathnames.login);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async value => {
    console.log(value);
  };

  return (
    <Container>
      <div tw='py-[10px] flex justify-between  items-center gap-[30px] text-[#fff] text-[12px] font-black leading-[16px] tracking-[1px] uppercase'>
        <Link to={pathnames.welcome} tw='text-[14px] lowercase font-semibold'>
          <span tw='text-[16px] uppercase font-black'>B</span>ooks 📖
          <span tw='text-[16px] uppercase font-black'>C</span>
          astle🏰
        </Link>
        <div tw='flex gap-[20px]  items-center'>
          <div tw='flex gap-[15px]'>
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
          <button onClick={handleLogout} tw='p-[10px] uppercase'>
            {isAuth ? t('header.logout') : t('auth.login')}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
