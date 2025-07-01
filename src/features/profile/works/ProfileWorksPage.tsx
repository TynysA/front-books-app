import 'twin.macro';

import { useTranslation } from 'react-i18next';

import AddBook from '@/widgets/ModalWindow/components/AddBook.tsx';

const ProfileWorksPage = () => {
  const { t } = useTranslation();

  const addBookFromUser = data => {
    console.log(data);
  };

  return (
    <div tw='bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4'>
      <AddBook handleFunction={addBookFromUser} modalContent={t('profile.works-definition')} />
    </div>
  );
};

export default ProfileWorksPage;
