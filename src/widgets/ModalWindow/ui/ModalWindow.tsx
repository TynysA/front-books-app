import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ModalWindow = props => {
  const navigate = useNavigate();
  const type = props?.type;
  const content = props?.modalContent;
  const { t } = useTranslation();
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
        onClick={() => props.setIsModalOpen(false)}
      >
        <div
          tw='rounded-[20px] border-[2px] border-[rgba(0, 0, 0, 0.20)] bg-white p-[30px] w-[690px]'
          onClick={e => e.stopPropagation()}
        >
          {/*{ModalComponent && (*/}
          {/*  <ModalComponent*/}
          {/*    {...{ handleClose, handleFunction, isLoading, variablesLoading, taskId, data, modalContent }}*/}
          {/*    {...additionalProps}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
