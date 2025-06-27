import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedDispatch } from '@/app/store';
import { setAuth } from '@/entities/user';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.tsx';
import { pathnames } from '@/shared/lib/constants.ts';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';

const UserMenu = ({ user, isAuth }: { user: any; isAuth: boolean }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setIsOpen(true);
  };
  const handleLogout = () => {
    try {
      dispatch(setAuth(false));
      navigate(pathnames.login);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 15000); // 15 секунд
  };

  if (!isAuth) {
    return <div>{t('auth.login')}</div>;
  }

  return (
    <div tw='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div tw='flex items-center gap-[8px] cursor-pointer'>
        {user?.username} <ProfileIcon twstyle={tw`w-[24px] h-[25px]`} />
      </div>

      {isOpen && (
        <div tw='absolute text-[#333] font-semibold text-left right-0 mt-3 bg-white shadow-lg p-3 flex flex-col gap-2 z-50 min-w-[150px]'>
          <Link to={pathnames.profile} tw='hover:text-blue-500'>
            {t('profile.profile')}
          </Link>
          <Link to={pathnames.library} tw='hover:text-blue-500'>
            {t('profile.library')}
          </Link>
          <Link to={pathnames.liked} tw='hover:text-blue-500'>
            {t('profile.liked')}
          </Link>
          <Button onClick={handleLogout}>{t('auth.logout')}</Button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
