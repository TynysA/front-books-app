import { ChangeEvent, FocusEvent, useState } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IMaskInput, useIMask } from 'react-imask';
import tw from 'twin.macro';

import { IDummyInput, IInput, IInputVariants, IMaskedInput } from '@/shared/ui/actionsUI/Input/types.ts';
import { ErrorMessageBlock } from '@/widgets/ErrorMessageBlock';

const inputVariants: IInputVariants = {
  light: tw`bg-[#fff] text-[#7d7d7d] border border-[#DEE0E3] outline-none w-full rounded-[5px] py-[13px] px-[10px]`,
  dark: tw`bg-[#212121] border-[2px] border-[#2F2F2F] outline-none w-full rounded-[10px] py-[16px] px-[14px]`,
  transparent: tw`h-[52px] bg-transparent border border-[var(--bg-secondary)] outline-none w-full rounded-[10px] py-[16px] px-[14px]`
};

const Input = <T extends FieldValues>({
  variant = 'light',
  type = 'text',
  icon,
  id,
  name,
  control,
  rules,
  onChange,
  twStyle,
  errorStyles,
  disableInputTyping = false,
  defaultTouched = false,
  placeholder = 'Введите текст',
  defaultValue = '',
  hasLabel = false,
  disabled = false,
  showError = true,
  showErrorBorder = false,
  showErrorBlock = false,
  isHiddenLetter = false,
  mask,
  inputMode,
  onBlur,
  inputStyle,
  min,
  max
}: IInput<T>) => {
  const {
    field: { value, onChange: fieldOnChange, name: fieldName },
    formState: { isValid },
    fieldState: { error }
  } = useController<UseControllerProps<object, string>>({
    name: name,
    control: control,
    rules: rules,
    shouldUnregister: false
  });

  const [isTouched, setIsTouched] = useState<boolean>(defaultTouched || defaultValue?.length !== 0);
  const [hidden, setHidden] = useState<boolean>(isHiddenLetter);
  const [customType, setCustomType] = useState<string>(type);

  const onFocusHandler = () => {
    if (hasLabel) setIsTouched(true);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (hasLabel && !e.target.value?.length) setIsTouched(false);
    if (onBlur) onBlur(e);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    fieldOnChange(e.target.value);
    if (onChange) onChange(e);
  };

  const toggleVisibilityHandler = (e: Event) => {
    e.preventDefault();
    setHidden(prevState => !prevState);
    setCustomType(prevState => (prevState === 'password' ? 'text' : 'password'));
  };

  return (
    <div tw='flex flex-col gap-[4px] grow' css={[twStyle]}>
      <label
        htmlFor={id}
        css={[
          tw`relative flex items-center font-semibold leading-[100%]`,
          inputVariants[variant],
          isTouched && tw`flex-col items-start py-[8px] gap-[4px]`,
          showErrorBorder && !isValid && error && tw`border-orange-border`,
          disabled && tw`bg-[#ADADAD]`,
          tw`focus-within:border-[#797979]`,
          variant === 'dark' && tw`bg-none`,
          showErrorBorder && !isValid && error && errorStyles,
          twStyle
        ]}
      >
        <span
          css={[
            tw`absolute text-[12px] leading-[100%] text-[#D3D3D3] opacity-0 transition-opacity`,
            isTouched && tw`relative opacity-100`
          ]}
        >
          {placeholder}
        </span>
        {mask ? (
          <MaskedInput
            hasLabel={hasLabel}
            mask={mask}
            setIsTouched={setIsTouched}
            name={fieldName}
            placeholder={placeholder}
            type={customType}
            variant={variant}
            value={value}
            onChange={fieldOnChange}
            inputMode={inputMode}
            min={min}
            disabled={disableInputTyping}
            inputStyle={inputStyle}
          />
        ) : (
          <input
            id={id}
            name={id}
            autoComplete='off'
            type={customType}
            value={value}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            disabled={disableInputTyping}
            min={min}
            max={max}
            css={[
              tw`w-full text-[#7d7d7d] placeholder:text-[#7d7d7d] placeholder:font-semibold placeholder:leading-[100%] placeholder:text-[14px] focus:shadow-none bg-transparent outline-none`,
              inputStyle
            ]}
            placeholder={placeholder}
          />
        )}
        {isHiddenLetter && (
          <button
            tw='bg-lightGreen py-[5px] px-[10px] rounded-[8px]'
            type={'button'}
            onClick={e => toggleVisibilityHandler(e)}
          >
            {hidden ? 'SHOW' : 'HIDE'}
          </button>
        )}
        {icon && <div tw='w-[14px] h-[14px] absolute right-[14px] top-[16px]'>{icon}</div>}
      </label>
      {showError && !isValid && error && showErrorBlock && <ErrorMessageBlock>{error.message || ''}</ErrorMessageBlock>}
      {showError && !isValid && error && !showErrorBlock && (
        <span tw='text-[#D81111] text-[14px]'>{error.message}</span>
      )}
    </div>
  );
};

const MaskedInput = ({
  enableFocus = true,
  mask,
  value,
  variant,
  name,
  type,
  disabled,
  onChange,
  showMask,
  setIsTouched,
  hasLabel,
  min,
  placeholder,
  inputStyle,
  inputMode
}: IMaskedInput) => {
  const [lazy, setLazy] = useState<boolean>(showMask);
  const { maskRef } = useIMask(mask);
  maskRef.current?.updateOptions(mask);

  const onFocusHandler = () => {
    setIsTouched(true);
    setLazy(false);
  };

  const onBlurHandler = () => {
    if (hasLabel && !value?.length) setIsTouched(false);
    setLazy(true);
  };

  const onChangeHandler = (value: never) => {
    onChange(value);
  };

  return (
    <IMaskInput
      id={name}
      name={name}
      mask={mask.mask}
      min={min}
      prepare={mask?.prepare}
      inputMode={inputMode}
      unmask={true}
      value={value}
      onBlur={enableFocus ? onBlurHandler : undefined}
      onFocus={() => {
        if (enableFocus) {
          onFocusHandler();
        }
      }}
      onAccept={onChangeHandler}
      lazy={lazy}
      placeholderChar={' '}
      autoComplete='off'
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      css={[
        tw`text-[#7d7d7d] placeholder:text-[#7d7d7d] placeholder:font-semibold placeholder:leading-[100%] placeholder:text-[14px] focus:shadow-none bg-transparent outline-none`,
        inputVariants[variant],
        disabled && tw`bg-[#ADADAD]`,
        tw`p-0 border-none`,
        inputStyle
      ]}
    />
  );
};

/**
 * Input not controlled by react-hook-form
 * **/
export const DummyInput = ({
  defaultValue = '',
  id,
  placeholder,
  disabled = false,
  type = 'text',
  variant = 'light',
  icon,
  hasLabel = false,
  defaultTouched = false,
  twStyle
}: IDummyInput) => {
  const [isTouched, setIsTouched] = useState<boolean>(defaultTouched || defaultValue?.length !== 0);

  const onFocusHandler = () => {
    if (hasLabel) setIsTouched(true);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (hasLabel && !e.target.value?.length) setIsTouched(false);
  };

  return (
    <label
      htmlFor={id}
      css={[
        tw`relative flex items-center font-semibold leading-[100%] text-[14px]`,
        inputVariants[variant],
        variant === 'dark' && tw`bg-none`,
        isTouched && tw`py-[12px] justify-between`,
        twStyle
      ]}
    >
      <div css={[isTouched && tw`flex flex-col items-start gap-[4px] w-full`]}>
        <span
          css={[
            tw`absolute text-[12px] leading-[100%] text-[#D3D3D3] opacity-0 transition-opacity`,
            isTouched && tw`relative opacity-100`
          ]}
        >
          {placeholder}
        </span>
        <input
          id={id}
          name={id}
          autoComplete='off'
          type={type}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          disabled={disabled}
          defaultValue={defaultValue}
          css={[
            tw`w-full text-[#7d7d7d] text-[16px] placeholder:text-[#7d7d7d] placeholder:font-semibold placeholder:leading-[100%] placeholder:text-[14px] focus:shadow-none bg-transparent outline-none`,
            twStyle
          ]}
          placeholder={placeholder}
        />
      </div>
      {icon && <div tw='w-[14px] h-[14px]'>{icon}</div>}
    </label>
  );
};

export default Input;
