import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { policyHolderSchema } from '@/features/reRegister/model/validationSchema.ts';
import CloseCircleIcon from '@/shared/assets/icons/CloseCircleIcon.tsx';
import PlucIcon from '@/shared/assets/icons/PlucIcon.tsx';
import Checkbox from '@/shared/ui/Checkbox/Checkbox.tsx';
import { IPolicyholderWidgetProps } from '@/widgets/PolicyholderWidget/model/type.ts';

export const PolicyholderWidget = (props: IPolicyholderWidgetProps) => {
  const [isAdding, setIsAdding] = useState(false); // Toggle input visibility for drivers
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    watch
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(policyHolderSchema(t)),
    defaultValues: {
      users: [...props.data]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users'
  });

  const closeAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(false);
    setInput('');
  };
  const removeUser = (item, i) => {
    console.log(item, i);
    props.handleRemove(item, () => {
      remove(i);
    });
  };
  const addElement = e => {
    setInput('');
    append({
      iin: e.target.value,
      fullName: 'fff RRdddddddR LLL',
      benefits: false,
      showDriver: false,
      driver: false
    });
    setIsAdding(false);
  };
  const handleChange = item => {
    // props.onChange(item);
    const form = watch();
    console.log(form);
  };

  return (
    <div tw='bg-primary p-4 rounded-[16px] shadow-nav-menu'>
      <h3 tw='text-secondary text-[13px] font-medium'>{props.title}</h3>
      <div>
        {fields.map((item, idx) => (
          <div key={idx} tw='py-[12px] flex flex-col gap-[16px] content-between border-b-[1px] border-[#EAECED]'>
            <div tw='flex items-center w-full'>
              <div tw='bg-green-100 p-2 rounded-full'>{props.logIcon}</div>
              <div tw='ml-3 text-[16px] flex flex-col'>
                <h4 tw='text-primary font-semibold'>{item?.fullName?.toUpperCase()}</h4>
                {!item?.showDriver && <div tw='text-gray text-[13px] font-normal'>{item?.iin?.toUpperCase()}</div>}
              </div>
              {!item?.showDriver && (
                <button type='button' tw='ml-auto' onClick={() => removeUser(item, idx)}>
                  <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
                </button>
              )}
            </div>
            {item?.showDriver && (
              <div tw='text-secondary text-[16px] font-medium flex justify-between'>
                <div>Буду управлять авто</div>
                <Checkbox
                  showErrorBlock={false}
                  control={control}
                  name={`users.${idx}.driver`}
                  disabled={false}
                  onChange={handleChange}
                />
              </div>
            )}
            <div tw='text-secondary text-[16px] font-medium flex justify-between'>
              <div>Имеются льготы</div>
              <Checkbox
                showErrorBlock={false}
                control={control}
                name={`users.${idx}.benefits`}
                disabled={false}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
      </div>
      {isAdding && (
        <div tw='py-[12px]'>
          <div tw='text-secondary text-[13px] font-medium mb-[12px]'>ИИН водителя</div>
          <div tw='relative'>
            <input
              id='iin'
              type='tel'
              value={input}
              maxLength={12}
              onChange={e => setInput(e.target.value)}
              onBlur={addElement}
              onKeyDown={e => {
                e.preventDefault();
                e.stopPropagation();
                if (e.key === 'Enter') {
                  addElement(e);
                }
              }}
              tw='bg-thirdly text-[#8E8E93] w-full border border-[#4EBC73] px-[16px] py-[12px] text-[16px] rounded-[16px]'
              placeholder={props.placeholder}
            />
            <button
              ref={props.closeButtonRef}
              tw='absolute right-[12px] top-[50%] translate-y-[-50%]'
              onClick={closeAdd}
            >
              <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
            </button>
          </div>
        </div>
      )}
      <button
        type='button'
        css={[isAdding && tw`opacity-50`]}
        tw={'flex items-center text-[#4EBC73] text-[16px] font-semibold py-[12px]'}
        onClick={() => setIsAdding(true)}
      >
        <div tw='bg-green-100 p-2 rounded-full'>
          <PlucIcon />
        </div>
        <span tw='ml-3'>Добавить водителя</span>
      </button>
    </div>
  );
};
