import 'twin.macro';

import { Link, NavLink, Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedSelector } from '@/app/store';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.tsx';
import Container from '@/shared/ui/Container/Container.tsx';

const ProfilePage = () => {
  const { user } = useTypedSelector(state => state.auth);
  const username = user?.username
    ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
    : 'Пользователь';
  return (
    <div>
      <Container>
        <div tw=''>
          <div>
            <div>
              <div tw="relative h-[150px] bg-gradient-to-br from-blue-400 to-purple-500">
                <button tw="absolute right-3 bottom-3 bg-white px-3 py-1 text-sm rounded shadow">
                  Изменить фон
                </button>
              </div>
              {/*<div tw=" relative z-[10] mt-[-40px] rounded-[10px] bg-white text-[60px] h-[100px] w-[100px] text-center">*/}
              {/*  {user.username.charAt(0).toUpperCase() }*/}
              {/*</div>*/}
              <div tw="pl-[150px] flex gap-6 bg-white px-6 items-end shadow">

                <div tw='bg-white'>
                  <div tw="text-[24px] font-semibold mb-2">{username}</div>
                  <div tw="flex gap-6  text-sm">
                    <NavLink
                      to="/profile"
                      tw="hover:text-blue-500"
                      style={({ isActive }) => (isActive ? { borderBottom: '2px solid #3b82f6' } : {})}
                    >
                      Мой профиль
                    </NavLink>
                    <NavLink
                      to="/profile/library"
                      tw="hover:text-blue-500"
                      style={({ isActive }) => (isActive ? { borderBottom: '2px solid #3b82f6' } : {})}
                    >
                      Библиотека
                    </NavLink>
                    <NavLink
                      to="/profile/liked"
                      tw="hover:text-blue-500"
                      style={({ isActive }) => (isActive ? { borderBottom: '2px solid #3b82f6' } : {})}
                    >
                      Понравившиеся
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
