import 'twin.macro';

import { ChangeEvent, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedSelector } from '@/app/store';
import { pathnames } from '@/shared/lib/constants.ts';
import Container from '@/shared/ui/Container/Container.tsx';
const profileLinks = [
  { link: pathnames.profile, label: 'Profile' },
  { link: pathnames.library, label: 'Library' },
  { link: pathnames.liked, label: 'Liked' }
];
const infoLinks = [
  { link: pathnames.profile, label: 'infoProfile' },
  { link: pathnames.profile_personal, label: 'personal' },
  { link: pathnames.profile_comments, label: 'comments' },
  { link: pathnames.profile_answers, label: 'answers' }
];

const ProfilePage = () => {
  const { user } = useTypedSelector(state => state.auth);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const username = user?.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'Пользователь';
  const { pathname } = useLocation();
  const handleBgUpload = async (file: File) => {
    console.log(file);
    // const formData = new FormData();
    // formData.append('userBg', file);
    //
    // try {
    //   await axios.put('/api/users/update-bg', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   });
    //   console.log('Фон успешно обновлён');
    // } catch (error) {
    //   console.error('Ошибка загрузки фона:', error);
    // }
  };

  return (
    <div>
      <Container>
        <div tw=''>
          <div>
            <div>
              <div tw='relative h-[150px] bg-gradient-to-br from-blue-400 to-purple-500'>
                <label tw='absolute right-3 bottom-3 bg-white px-3 py-1  rounded shadow cursor-pointer'>
                  <div tw='text-xs'>Изменить фон</div>
                  <input
                    ref={inputRef}
                    type='file'
                    tw='hidden'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleBgUpload(e, 'bg')}
                  />
                </label>
              </div>
              <div tw='bg-sky-200 border-[5px] border-blue-500 rounded-[20px] absolute z-[10] mt-[-40px] ml-6  h-[100px] w-[100px]'>
                <div tw='text-[60px] text-center'>{user.username.charAt(0).toUpperCase()}</div>
              </div>

              <div tw='pl-[168px] flex gap-6 bg-white px-6 items-end shadow'>
                <div tw='bg-white'>
                  <div tw='text-[24px] font-semibold mb-2'>{username}</div>
                  <div tw='flex gap-6  text-sm'>
                    {profileLinks.map(item => (
                      <NavLink
                        key={item.link}
                        to={item.link}
                        tw='hover:text-blue-500'
                        css={[pathname === item.link && tw`border-b-2 border-b-[#3b82f6]`]}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div tw='mt-[15px] flex gap-[20px]'>
          {![pathnames.library, pathnames.liked].includes(pathname) && (
            <div tw='flex flex-col gap-[8px] bg-white p-6 w-[148px] rounded-2xl shadow-lg'>
              {infoLinks.map(item => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  tw='hover:text-blue-500'
                  css={[pathname === item.link && tw`border-b-2 border-b-[#3b82f6]`]}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
