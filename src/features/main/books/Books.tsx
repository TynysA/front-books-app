import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

import { MODAL_TYPES } from '@/shared/lib/modalTypes.ts';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';

const Books = () => {
  const { t } = useTranslation();
  const { setIsModalOpen, setModalType, setModalContent } = useOutletContext<IOutletProps>();

  const addNewTest = () => {
    console.log('--add new test--');
    setIsModalOpen(true);
    setModalType(MODAL_TYPES.ADD_BOOK);
  };
  return (
    <div tw='p-[30px] rounded-[20px] flex flex-col gap-[20px] bg-primary text-primary'>
      <div id={'actions'} tw='flex justify-between items-center w-full'>
        <div tw='text-[30px] font-bold'>{t('main.books')}</div>
        <Button onClick={addNewTest}>{t('books.create')}</Button>
      </div>
      <div
        id={'list-of-tests'}
        tw='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[15px] gap-y-[25px]'
      >
        {/*{testList.map((item, idx) => (*/}
        {/*  <div*/}
        {/*    key={idx}*/}
        {/*    tw='bg-lightGreen cursor-pointer p-4 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-[10px]'*/}
        {/*  >*/}
        {/*    <div>*/}
        {/*      <span tw='font-medium'>{t('tests.title')}</span>: {item.title}*/}
        {/*    </div>*/}
        {/*    {item?.categories?.length > 0 && (*/}
        {/*      <div tw='flex'>*/}
        {/*        <span tw='font-medium'>{t('tests.categories')}</span>:*/}
        {/*        {item?.categories?.map((row, idx) => <div key={idx}>{row}</div>)}*/}
        {/*      </div>*/}
        {/*    )}*/}
        {/*    <div>*/}
        {/*      <span tw='font-medium'>{t('tests.questions_count')}</span>: {item.questions_count}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default Books;
