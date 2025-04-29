import { Controller, FieldValues } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

import { ICreatableSelect } from '@/shared/ui/actionsUI/CreatableSelect/types.ts';

const Creatable = <T extends FieldValues>({
  options = [],
  placeholder = 'Select or create an option...',
  control,
  disabled = false,
  name,
  twStyle
}: ICreatableSelect<T>) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: disabled ? '#ADADAD' : '#fff',
      borderColor: state.isFocused ? '#7d7d7d' : '#DEE0E3',
      boxShadow: 'none',
      padding: '5px',
      borderRadius: '5px',
      minHeight: '40px',
      '&:hover': {
        borderColor: '#7d7d7d'
      }
    }),
    placeholder: base => ({
      ...base,
      color: '#7d7d7d',
      fontWeight: 500
    })
  };

  return (
    <Controller
      name={name}
      control={control}
      // css={[
      //   tw`relative flex items-center font-semibold leading-[100%] bg-[#fff] text-[#7d7d7d] border border-[#DEE0E3] outline-none w-full rounded-[5px] py-[13px] px-[10px]`,
      //   disabled && tw`bg-[#ADADAD]`,
      //   twStyle
      // ]}
      render={({ field }) => (
        <CreatableSelect
          {...field}
          isMulti
          options={options}
          placeholder={placeholder}
          isDisabled={disabled}
          value={field.value}
          styles={customStyles}
          onChange={selected => field.onChange(selected)}
        />
      )}
    />
  );
  // return <CreatableSelect name={name} placeholder={placeholder} isDisabled={disabled} isMulti options={options} />;
};

export default Creatable;
