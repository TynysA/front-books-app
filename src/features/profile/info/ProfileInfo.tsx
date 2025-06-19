import 'twin.macro';

import { Link } from 'react-router-dom';

import { pathnames } from '@/shared/lib/constants.ts';

const ProfileInfo = () => {
  return (
    <div tw='mt-[15px] flex'>
      <div tw='flex flex-col gap-[8px] bg-white p-6 rounded-2xl shadow-lg'>
        <Link to={pathnames.profile}>Общее</Link>
        <Link to={pathnames.profile_personal}>Личный кобинет</Link>
        <Link to={pathnames.profile_comments}>Комментарии</Link>
        <Link to={pathnames.profile_answers}>Ответы</Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
