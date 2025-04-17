import { FieldValues, useController } from 'react-hook-form';
import tw from 'twin.macro';

import { ITextArea } from '@/shared/ui/Textarea/types';

const Textarea = <T extends FieldValues>({
  rows = '5',
  cols = '45',
  placeholder,
  id,
  onChange,
  twStyle,
  showErrorBorder = false,
  name,
  control,
  rules
}: ITextArea<T>) => {
  const {
    field: { value, onChange: fieldOnChange },
    fieldState: { error }
  } = useController({ name: name, control: control, rules: rules, shouldUnregister: false });

  const onChangeHandler = e => {
    fieldOnChange(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <textarea
      rows={rows}
      cols={cols}
      name={id}
      id={id}
      value={value}
      maxLength={'450'}
      css={[
        tw`rounded-[0.875rem] bg-white border border-[#DEE0E3] outline-none outline-none text-black font-bold placeholder-[#8e8e93]
          placeholder-shown:font-normal placeholder:text-[#8e8e93] px-[14px] py-[13px] w-full
          focus:border-[#797979] disabled:cursor-not-allowed text-[0.875rem] resize-none`,
        showErrorBorder && error && tw`border-orange-border`,
        twStyle
      ]}
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></textarea>
  );
};

export const DummyTextarea = ({ rows = 5, cols = 45, placeholder, id, onChange, twStyle, value, disabled = false }) => {
  const onChangeHandler = e => {
    onChange(e.target.value);
  };

  return (
    <textarea
      rows={rows}
      cols={cols}
      name={id}
      id={id}
      value={value}
      maxLength={450}
      disabled={disabled}
      css={[
        tw`rounded-[0.875rem] bg-white border border-[#DEE0E3] outline-none outline-none text-black font-bold placeholder-[#8e8e93]
          placeholder-shown:font-normal placeholder:text-[#8e8e93] px-[14px] py-[13px] w-full
          focus:border-[#797979] disabled:cursor-not-allowed text-[0.875rem] resize-none`,
        twStyle
      ]}
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></textarea>
  );
};

export default Textarea;
