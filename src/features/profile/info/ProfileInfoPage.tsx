import 'twin.macro';

import { useLocation } from 'react-router-dom';

import ProfileAnswersPage from '../answers/ProfileAnswersPage';
import ProfileCommentsPage from '../comments/ProfileCommentsPage';
import ProfilePersonalPage from '../personal/ProfilePersonalPage';
import ProfileWorksPage from '../works/ProfileWorksPage';

const ProfileInfoPage = () => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get('type');

  if (type === 'personal') return <ProfilePersonalPage />;
  if (type === 'comments') return <ProfileCommentsPage />;
  if (type === 'answers') return <ProfileAnswersPage />;
  if (type === 'works') return <ProfileWorksPage />;

  return <div tw='mt-[15px] flex'>info</div>;
};

export default ProfileInfoPage;
