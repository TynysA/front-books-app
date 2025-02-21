import { FieldValues, useController } from 'react-hook-form';
import tw from 'twin.macro';

import { IRadio } from '@/shared/ui/actionsUI/Radio/types.ts';

const styles = {
  container: ({ disabled }) => [tw`max-w-full w-full relative`, disabled && tw`opacity-50`]
};

const Radio = <T extends FieldValues>({ name, control, rules, disabled, options, radioStyle }: IRadio<T>) => {
  const {
    field: { value, onChange, name: fieldName, ref }
  } = useController({ name: name, control: control, rules: rules });

  return (
    <div css={styles.container({ disabled: disabled })} tw='flex flex-col space-y-[1px] gap-2 mb-5'>
      {options.map(radio => (
        <div key={radio.value} css={[radioStyle]}>
          <div tw='flex gap-[10px]'>
            <input
              id={radio.value}
              type='radio'
              name={fieldName}
              className='hidden'
              value={radio.value}
              ref={ref}
              onChange={onChange}
              disabled={disabled}
              tw='opacity-0 absolute h-8 w-8'
            />
            {radio.value === value ? (
              <div tw="bg-transparent border-2 rounded-full border-checkbox w-[1.125rem] h-[1.125rem] flex shrink-0 justify-center items-center after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:bg-checkbox" />
            ) : (
              <div tw='bg-transparent border-2 rounded-full border-checkbox w-[1.125rem] h-[1.125rem] flex shrink-0 justify-center items-center' />
            )}
            <div tw='flex flex-col gap-[10px]'>
              <label htmlFor={radio.value} tw='select-none flex flex-wrap text-white text-[14px] font-bold'>
                {radio.title}
              </label>
              {radio.value === value && radio.customElement && radio.customElement}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Radio;
