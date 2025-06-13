import 'twin.macro';

import { Link, Outlet } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedSelector } from '@/app/store';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.tsx';

const ProfilePage = () => {
  const { user } = useTypedSelector(state => state.auth);

  return (
    <div tw='mt-[15px]'>
      <div>
        <div tw=''></div>
        <div tw='flex items-end gap-[25px]'>
          <ProfileIcon fill={'black'} twstyle={tw`h-[80px] w-[80px]`} />
          <div>
            <div tw='text-[28px]'>{user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</div>
            <div tw='flex items-end gap-[25px]'>
              <Link to={'/profile'}>Profile</Link>
              <Link to={'/profile/library'}>Library</Link>
              <Link to={'/profile/liked'}>Liked</Link>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
