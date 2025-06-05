import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

const BooksFromUsers = () => {
  const { t } = useTranslation();
  const { setIsModalOpen, setModalType, setModalContent } = useOutletContext<IOutletProps>();

  return (
    <div tw='p-[30px] rounded-[20px] flex flex-col gap-[20px] bg-primary text-primary'>
      <div tw='text-[30px] font-bold  w-full'>{t('main.books-from-users')}</div>
      <div
        id={'list-of-tests'}
        tw='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[15px] gap-y-[25px]'
      ></div>
    </div>
  );
};

export default BooksFromUsers;
