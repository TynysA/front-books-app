import { motion } from 'framer-motion';
import { forwardRef, Fragment, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import CheckboxActive from '@/shared/assets/icons/CheckboxActive.tsx';
import { ICheckbox } from '@/shared/ui/Checkbox/types';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

const styles = {
  container: ({ isOn }: { isOn: boolean }) => [
    tw`flex items-center bg-white p-[4px] rounded-[20px] w-[53px] shrink-0 h-[34px] relative `,
    isOn ? tw`justify-end` : tw`justify-start bg-[#2F2F2F]`
  ],
  toggle: ({ isOn }: { isOn: boolean }) => [
    tw`w-[30px] h-[30px] bg-[#909090] shadow-checkbox rounded-[20px] p-[4px] text-white flex justify-center items-center`,
    isOn && tw`bg-[#4FAF3B]`
  ],
  label: (isWhite?: boolean) => [tw`text-[14px] leading-[normal] text-[#CFCFCF]`, isWhite && tw`text-[#fff] font-bold`],
  right: ({ isOn }: { isOn?: boolean }) => [tw`absolute right-2 text-primary`, isOn && tw`hidden`],
  left: ({ isOn }: { isOn?: boolean }) => [tw`absolute left-2 text-primary`, !isOn && tw`hidden`],
  dot: () => [tw`rounded-[20px] w-4 h-4`]
};

const Checkbox = <T extends FieldValues>({
  twStyle,
  label,
  hasWord,
  variant = 'default',
  isWhite,
  disabled,
  showError = true,
  showErrorBlock = true,
  name,
  control,
  rules
}: ICheckbox<T>) => {
  const {
    field: { value = false, onChange, name: fieldName, ref },
    fieldState: { error }
  } = useController({ name: name, control: control, rules: rules });

  return (
    <Fragment>
      {variant === 'default' && (
        <DefaultCheckbox
          ref={ref}
          label={label}
          isWhite={isWhite}
          twStyle={twStyle}
          hasWord={hasWord}
          value={value}
          onChange={onChange}
          fieldName={fieldName}
          disabled={disabled}
          showError={showError}
          error={error}
        />
      )}
      {variant === 'small' && (
        <SmallCheckbox
          ref={ref}
          label={label}
          isWhite={isWhite}
          twStyle={twStyle}
          hasWord={hasWord}
          value={value}
          onChange={onChange}
          fieldName={fieldName}
          disabled={disabled}
          showError={showError}
          error={error}
        />
      )}
    </Fragment>
  );
};

const DefaultCheckbox = forwardRef(
  ({ disabled, value, label, isWhite, error, fieldName, twStyle, hasWord, showError, onChange }, ref) => {
    const { t } = useTranslation();
    const [isOn, setIsOn] = useState<boolean>(value);

    const RightIcon = ({ isOn }) => <div css={styles.dot({ isOn, isLeft: false })} />;
    const LeftIcon = ({ isOn }) => <div css={styles.dot({ isOn, isLeft: true })} />;

    useEffect(() => {
      setIsOn(value);
    }, [value]);

    return (
      <Fragment>
        <div css={[tw`flex justify-between items-center gap-[20px]`, twStyle]}>
          {label && <span css={styles.label(isWhite)}>{label}</span>}
          <div css={styles.container({ isOn })}>
            <motion.div css={styles.toggle({ isOn })} layout transition={spring}>
              {isOn ? <RightIcon isOn={isOn} /> : <LeftIcon isOn={isOn} />}
            </motion.div>
            <span css={styles.right({ isOn })}>
              <RightIcon isOn={isOn} />
              {hasWord && (
                <span tw='text-[8px] text-[#fff] font-bold leading-[normal] opacity-50 absolute bottom-[3px] right-[-4px]'>
                  {t('common.no')}
                </span>
              )}
            </span>
            <span css={styles.left({ isOn })}>
              <LeftIcon isOn={isOn} />
              {hasWord && (
                <span tw='text-[8px] text-[#0f2920] font-bold leading-[normal] opacity-50 absolute bottom-[3px] right-[9px]'>
                  {t('common.yes')}
                </span>
              )}
            </span>
            <input
              type='checkbox'
              id={fieldName}
              name={fieldName}
              disabled={disabled}
              checked={value}
              onChange={onChange}
              ref={ref}
              tw='opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer'
            />
          </div>
        </div>
      </Fragment>
    );
  }
);

const SmallCheckbox = forwardRef(
  ({ disabled, value, label, error, fieldName, twStyle, showError, showErrorBlock, onChange }, ref) => {
    const [isOn, setIsOn] = useState<boolean>(value);

    useEffect(() => {
      setIsOn(value);
    }, [value]);

    return (
      <div tw='flex flex-col gap-[4px] grow' css={[twStyle]}>
        <label css={[tw`flex items-center gap-[12px] text-gray relative`]}>
          <div
            css={[
              tw`rounded-full w-[24px] h-[24px] border border-white flex justify-center items-center`,
              isOn && tw`border-none`
            ]}
          >
            {isOn && <CheckboxActive />}
            <input
              type='checkbox'
              id={fieldName}
              name={fieldName}
              disabled={disabled}
              checked={value}
              onChange={onChange}
              ref={ref}
              tw='opacity-0 absolute w-[24px] h-[24px] top-0 left-0 cursor-pointer'
            />
          </div>
          {label && <span>{label}</span>}
        </label>
        {showError && error && !showErrorBlock && <span tw='text-[#D81111] text-[14px]'>{error.message}</span>}
      </div>
    );
  }
);

export default Checkbox;
