import 'twin.macro';

import { ChangeEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedSelector } from '@/app/store';
import { infoLinks, profileLinks } from '@/pages/ProfilePage/model/constants.ts';
import { pathnames } from '@/shared/lib/constants.ts';
import Container from '@/shared/ui/Container/Container.tsx';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { user } = useTypedSelector(state => state.auth);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const username = user?.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'Пользователь';
  const { pathname, search } = useLocation();
  const handleBgUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('userBg', file);

    console.log(file);
    console.log(formData);
    // try {
    //   await axios.put('/api/users/update-bg', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   });
    //   console.log('Фон успешно обновлён');
    //   // Тут можешь, например, обновить state или вызвать invalidateTags / refetch юзера
    // } catch (error) {
    //   console.error('Ошибка загрузки фона:', error);
    // }
  };

  return (
    <div>
      <Container>
        <div tw='pb-[20px]'>
          <div>
            <div>
              <div tw='relative h-[150px] bg-gradient-to-br from-blue-400 to-purple-500'>
                <label tw='absolute right-3 bottom-3 bg-white px-3 py-1  rounded shadow cursor-pointer'>
                  <div tw='text-xs'>{t('profile.change-bg')}</div>
                  <input ref={inputRef} type='file' tw='hidden' onChange={handleBgUpload} />
                </label>
              </div>
              <div tw='grid place-content-center bg-sky-200 border-[5px] border-blue-500 rounded-[20px] absolute z-[10] mt-[-60px] ml-2  h-[115px] w-[115px]'>
                <div tw='text-[60px] text-center'>{user.username.charAt(0).toUpperCase()}</div>
              </div>

              <div tw='pl-[163px] flex gap-6 bg-white px-6 items-end shadow'>
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
                        {t(`profile.${item.label}`)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tw='mt-[15px] flex gap-[20px] text-[14px] w-full'>
            {![pathnames.library, pathnames.liked].includes(pathname) && (
              <div tw='flex flex-col gap-[8px] bg-white py-6 px-2 rounded-2xl shadow-lg w-fit self-start'>
                {infoLinks.map(item => (
                  <NavLink
                    key={item.link}
                    to={item.link}
                    tw='hover:text-blue-500'
                    css={[pathname + search === item.link && tw`border-b-2 border-b-[#3b82f6]`]}
                  >
                    {t(`profile.${item.label}`)}
                  </NavLink>
                ))}
              </div>
            )}
            <div tw='flex-grow'>
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
