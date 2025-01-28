import 'twin.macro';

import { useState } from 'react';
import tw from 'twin.macro';

import { IPolicyDataProps } from '@/features/typePolicy/model/types.ts';
import CloseCircleIcon from '@/shared/assets/icons/CloseCircleIcon.tsx';
import PlucIcon from '@/shared/assets/icons/PlucIcon.tsx';

export const PolicyData = (props: IPolicyDataProps) => {
  const [isAdding, setIsAdding] = useState(false); // Toggle input visibility for drivers
  const [input, setInput] = useState('');

  const closeAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(false);
    setInput('');
  };
  const addElement = e => {
    handleAdd(e);
    setInput('');
    setIsAdding(false);
  };

  return (
    <div tw='bg-primary p-4 rounded-lg shadow-nav-menu'>
      <h3 tw='text-secondary text-[13px] font-medium'>{props.title}</h3>
      <div>
        {props.data.map((item, idx) => (
          <div key={idx} tw='py-[12px] flex items-center justify-between border-b-[1px] border-[#EAECED]'>
            <div tw='flex items-center'>
              <div tw='bg-green-100 p-2 rounded-full'>{props.logIcon}</div>
              <div tw='ml-3 text-[16px] flex gap-[12px]'>
                <h4 tw='text-primary'>{item?.title?.toUpperCase()}</h4>
                {item?.subTitle && (
                  <div tw='text-gray py-[2px] px-[4px] flex font-normal text-[11px] rounded-[4px]  border-[1px] border-[#636366]'>
                    {item?.subTitle?.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            {item.canNotRemove ? (
              <span tw='bg-block text-gray text-[13px] px-2 py-1 rounded-full'>Страхаватель</span>
            ) : (
              <button onClick={() => props.handleRemove(item?.id)}>
                <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
              </button>
            )}
          </div>
        ))}
      </div>
      {isAdding && (
        <div tw='py-[12px] relative'>
          <input
            id='iin'
            type='tel'
            value={input}
            maxLength={12}
            onChange={e => setInput(e.target.value)}
            onBlur={addElement}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                addElement(e);
                e.target?.blur();
              }
            }}
            tw='bg-thirdly text-[#8E8E93] w-full border border-[#4EBC73] px-[16px] py-[12px] text-[16px] rounded-[16px]'
            placeholder={props.placeholder}
          />
          <button ref={props.closeButtonRef} tw='absolute right-[12px] top-[50%] translate-y-[-50%]' onClick={closeAdd}>
            <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
          </button>
        </div>
      )}
      <button
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
