import { useEffect, useMemo, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import RSelect from 'react-select';
import tw from 'twin.macro';

import i18n from '@/app/i18n/config';
import { ISelect } from '@/shared/ui/Select/types';

const styles = icon => ({
  control: provided => [
    { ...provided },
    {
      ...tw`w-full font-semibold leading-[100%] text-[12px] bg-transparent border border-[#DEE0E3] outline-none w-full rounded-[8px] py-[14px] px-[14px]`
    },
    { ...tw`focus-within:border-[#DEE0E3] hover:border-[#DEE0E3] shadow-none` }
  ],
  noOptionsMessage: provided => ({ ...provided, ...tw`p-[14px]` }),
  indicatorSeparator: provided => ({ ...provided, ...tw`hidden` }),
  indicatorsContainer: provided => ({ ...provided, ...tw`h-[18px]` }),
  valueContainer: provided => ({ ...provided, ...tw`p-0` }),
  dropdownIndicator: provided => ({ ...provided, ...tw`text-[#7d7d7d] p-0 [&_svg]:w-[18px] [&_svg]:h-[18px]` }),
  input: provided => ({ ...provided, ...tw`text-[#7d7d7d]` }),
  placeholder: provided => [{ ...provided, ...tw`text-[#7d7d7d]` }, icon && tw`pl-8`],
  singleValue: provided => [{ ...provided, ...tw`text-black` }],
  multiValueRemove: provided => [{ ...provided, ...tw`text-black` }],
  menu: provided => ({
    ...provided,
    ...tw`bg-white top-[46px] rounded-[8px] border border-[#DEE0E3] outline-none`
  }),
  menuList: provided => ({
    ...provided,
    ...tw`flex flex-col`
  }),
  option: (base, { isFocused, isSelected }) => {
    const customSelected = isSelected ? tw`bg-transparent text-black hover:bg-none` : tw``;
    const customFocused = isFocused ? tw`bg-transparent` : tw``;
    return {
      ...base,
      ...customSelected,
      ...customFocused,
      ...tw`active:bg-[#DEE0E3] text-[0.875rem] p-[14px] [&:not(:last-child)]:border-b-[#DEDEDE80] [&:not(:last-child)]:border-b-[1px]`
    };
  }
});

const Select = <T extends FieldValues>({
  options,
  control,
  icon,
  name,
  placeholder = 'Выберите вариант',
  disabled,
  defaultValue,
  isSearchable,
  rules,
  errorStyles,
  showErrorBlock,
  twStyle,
  isMulti = false,
  showErrorBorder = false,
  getOptionValue
}: ISelect<T>) => {
  const [localValue, setLocalValue] = useState<string>(null);

  options = useMemo(() => options.map(el => ({ label: el?.name || el?.label, value: el?.id || el?.value })), [options]);

  useEffect(() => {
    if (defaultValue && !localValue) {
      if (Array.isArray(defaultValue)) {
        setLocalValue(defaultValue);
      } else setLocalValue(options.filter(option => option.value === defaultValue));
    }
  }, [defaultValue, localValue, options]);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      css={[tw`border-[#fff]`, twStyle]}
      render={({ field: { onChange, onBlur, name, ref }, fieldState: { error } }) => {
        return (
          <div tw='flex flex-col gap-[4px] grow' css={[twStyle]}>
            <div
              css={[
                tw`border-[2px] border-transparent rounded-[10px]`,
                showErrorBorder && error && tw`border-[#f9b000]`,
                errorStyles && showErrorBorder && error && errorStyles
              ]}
            >
              <RSelect
                isMulti={isMulti}
                ref={ref}
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
                name={name}
                value={localValue}
                isSearchable={isSearchable ?? true}
                noOptionsMessage={() => i18n.t('common.no-options')}
                styles={styles(icon)}
                onBlur={onBlur}
                onChange={option => {
                  const value = getOptionValue ? getOptionValue(option) : option;
                  setLocalValue(option);
                  onChange(value);
                }}
              />
            </div>
            {error && !showErrorBlock && <span tw='text-[#D81111] text-[14px]'>{error.message}</span>}
          </div>
        );
      }}
    />
  );
};

export const DummySelect = ({
  isMulti = false,
  placeholder,
  options,
  disabled = false,
  name,
  isSearchable,
  getOptionValue,
  onChange,
  onBlur,
  twStyle,
  defaultValue,
  icon
}) => {
  const [localValue, setLocalValue] = useState<string>(null);

  options = useMemo(() => options.map(el => ({ label: el?.name, value: el?.id, ...el })), [options]);

  useEffect(() => {
    if (defaultValue && !localValue) {
      if (Array.isArray(defaultValue)) {
        setLocalValue(defaultValue);
      } else setLocalValue(options.filter(option => option.value === defaultValue));
    }
  }, [defaultValue, localValue, options]);

  return (
    <div tw='shrink-0 min-w-[200px] max-w-[320px]' css={[twStyle]}>
      <RSelect
        isMulti={isMulti}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
        name={name}
        value={localValue}
        isSearchable={isSearchable ?? true}
        noOptionsMessage={() => i18n.t('common.no-options')}
        styles={styles(icon)}
        onBlur={onBlur}
        onChange={option => {
          const value = getOptionValue ? getOptionValue(option) : option;
          setLocalValue(option);
          onChange(value);
        }}
      />
    </div>
  );
};

export default Select;
