import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import ArrowRight from '@/shared/assets/icons/ArrowRight.tsx';
import CloseCircleIcon from '@/shared/assets/icons/CloseCircleIcon.tsx';
import { IButtonSheet, ISelectButtonSheet } from '@/widgets/ButtonSheet/ui/type.ts';

export const ButtonSheet = (props: IButtonSheet) => {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          tw='fixed inset-0 top-0 left-0 z-[10] w-full h-full bg-[#00000080]'
          onClick={props.onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={e => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            tw='fixed bottom-0 left-0 w-full flex flex-col px-[16px] pb-[38px] pt-[16px] gap-[16px] bg-primary text-primary'
          >
            {props.type === 'select' && (
              <SelectButtonSheet
                title={props.title}
                options={props.options}
                onClose={props.onClose}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
              />
            )}
            {props.type === 'info' && <InfoButtonSheet title={props.title} text={props.propstext} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SelectButtonSheet = ({ title, options, onClose, onChange, defaultValue }: ISelectButtonSheet) => {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    setSelectedOption({ label: defaultValue });
  }, []);

  const changeLoacalValue = item => {
    setSelectedOption(item);
    if (onChange) onChange(item);
  };

  return (
    <div tw='fixed bottom-0 left-0 w-full flex flex-col	px-[16px] pb-[38px] pt-[16px] gap-[16px] bg-primary text-primary'>
      <p tw='flex justify-between items-center'>
        {title}
        <button type='button' onClick={onClose}>
          <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
        </button>
      </p>
      <div tw='bg-fourthly rounded-[16px] px-[16px]'>
        {options?.map((option, index) => (
          <div
            key={index}
            tw='py-[17px] flex justify-between'
            css={[selectedOption?.label == option?.label && tw`text-[#4EBC73]`]}
            onClick={() => changeLoacalValue(option)}
          >
            {option?.label || option?.name || option?.title}
            {selectedOption?.label == option?.label && <ArrowRight fill={'#4EBC73'} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoButtonSheet = ({ title, text }) => {
  return (
    <div tw='flex gap-[10px] text-left items-center justify-between'>
      <span>{title}</span>
      <span>{text}</span>
    </div>
  );
};
