import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getModalComponent } from '@/widgets/ModalWindow/model/constants.ts';

export const ModalWindow = props => {
  const navigate = useNavigate();
  const type = props?.type;
  const content = props?.content;
  const { t } = useTranslation();
  const handleClose = () => {
    props?.setIsModalOpen(false);
  };
  const ModalComponent = getModalComponent(type);
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            opacity: {
              duration: 0.25,
              delay: 0.15
            }
          }
        }}
        exit={{
          opacity: 0,
          transition: {
            opacity: {
              duration: 0.25
            }
          }
        }}
        tw='w-[calc(100% + 20px)] h-[calc(100% + 20px)] top-[-10px] left-[-10px] flex justify-center items-center fixed z-10 backdrop-blur-[6px]'
      >
        <div tw='rounded-[20px] border-[2px] border-[rgba(0, 0, 0, 0.20)] bg-white p-[30px] w-[690px]'>
          {ModalComponent && <ModalComponent {...{ handleClose, modalContent: props.content }} />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
