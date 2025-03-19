import 'twin.macro';

import { useTranslation } from 'react-i18next';

import Header from '@/shared/ui/Header.tsx';

const WelcomePage = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: 'student-title',
      points: ['student-points1', 'student-points2']
    },
    {
      title: 'teacher-title',
      points: ['teacher-points1', 'teacher-points2', 'teacher-points3']
    }
  ];

  return (
    <div tw='bg-root overflow-hidden flex flex-col bg-[#4582af] gap-[15px] text-primary'>
      <div tw='bg-[#4582af]'>
        <Header />
      </div>
    </div>
  );
};

export default WelcomePage;
