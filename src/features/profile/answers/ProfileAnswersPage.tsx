import 'twin.macro';

import { useTranslation } from 'react-i18next';

import { PROJECT_FAQ } from '../model/constants.ts';

const ProfileAnswersPage = () => {
  const { t } = useTranslation();

  return (
    <div tw='bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4'>
      <h2 tw='text-[24px] font-bold mb-4'>{t('profile.answers')}</h2>
      {PROJECT_FAQ.map((item, idx) => (
        <div key={idx} tw='border p-4 rounded bg-gray-50'>
          <div tw='font-semibold mb-2'>{t(item.question)}</div>
          <div>{t(item.answer)}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfileAnswersPage;
