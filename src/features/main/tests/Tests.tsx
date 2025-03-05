import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

import { ITests, testList } from '@/features/main/tests/model/types.ts';
import { MODAL_TYPES, ModalType } from '@/shared/lib/modalTypes.ts';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';

const Tests = () => {
  const { t } = useTranslation();
  const { setIsModalOpen, setModalType, setModalContent } = useOutletContext<IOutletProps>();

  const openModal = (type: ModalType, test?: ITests) => {
    setIsModalOpen(true);
    setModalType(type);
    if (test) {
      console.log(test);
      setModalContent(test);
    }
  };

  return (
    <div tw='p-[30px] rounded-[20px] flex flex-col gap-[20px] bg-primary text-primary'>
      <div id={'actions'} tw='flex justify-between items-center w-full'>
        <div tw='text-[30px] font-bold'>{t('main.tests')}</div>
        <Button onClick={() => openModal(MODAL_TYPES.ADD_TEST)}>{t('tests.create')}</Button>
      </div>
      <div
        id={'list-of-tests'}
        tw='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[15px] gap-y-[25px]'
      >
        {testList.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openModal(MODAL_TYPES.OPEN_TEST, item)}
            tw='bg-lightGreen cursor-pointer p-4 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-[10px]'
          >
            <div>
              <span tw='font-medium'>{t('tests.title')}</span>: {item.title}
            </div>
            {item?.categories && item?.categories?.length > 0 && (
              <div tw='flex'>
                <span tw='font-medium'>{t('tests.categories')}</span>:
                {item?.categories?.map((row, idx) => <div key={idx}>{row}</div>)}
              </div>
            )}
            <div>
              <span tw='font-medium'>{t('tests.questions_count')}</span>: {item.questions_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tests;
