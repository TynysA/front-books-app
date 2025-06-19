import { Controller, FieldValues } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

import { ICreatableSelect } from '@/shared/ui/actionsUI/CreatableSelect/types.ts';
import tw from 'twin.macro';

const Creatable = <T extends FieldValues>({
  options = [],
  placeholder = 'Select or create an option...',
  control,
  disabled = false,
  showErrorBorder = false,
  name,
}: ICreatableSelect<T>) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: disabled ? '#ADADAD' : '#fff',
      borderColor: state.eror ? 'border-orange-border' : state.isFocused ? '#7d7d7d' : '#DEE0E3',
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
