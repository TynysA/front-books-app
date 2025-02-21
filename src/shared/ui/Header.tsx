import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { pathnames } from '@/shared/lib/constants';
import { LangSwitcher, ThemeSwitcher } from '@/shared/ui/Switchers';

const Header = () => {
  const { t } = useTranslation();

  // const { user } = useTypedSelector(state => state.auth);

  const handleLogout = async () => {
    try {
      // await localforage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div tw='mb-[30px] flex justify-between text-primary items-center gap-[30px] text-[#2F2F2F] text-[12px] font-black leading-[16px] tracking-[1px] uppercase'>
      <Link to={pathnames.main}>QuizzDo</Link>
      <div tw='flex gap-[20px]  items-center'>
        <ThemeSwitcher />
        <LangSwitcher />
        <button onClick={handleLogout} tw='p-[10px] uppercase'>
          {t('header.logout')}
        </button>
      </div>
    </div>
  );
};

export default Header;
