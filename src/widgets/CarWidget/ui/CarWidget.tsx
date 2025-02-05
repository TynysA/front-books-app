import 'twin.macro';

import { useState } from 'react';
import tw from 'twin.macro';

import { IPolicyDataProps } from '@/features/typePolicy/model/types.ts';
import CloseCircleIcon from '@/shared/assets/icons/CloseCircleIcon.tsx';
import LinedInfoIcon from '@/shared/assets/icons/LinedInfoIcon.tsx';
import PlucIcon from '@/shared/assets/icons/PlucIcon.tsx';

export const CarWidget = (props: IPolicyDataProps) => {
  const [isAdding, setIsAdding] = useState(false); // Toggle input visibility for drivers
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState({
    error: false,
    message: ''
  });

  const closeAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(false);
    setInput('');
    setInputError({
      error: false,
      message: ''
    });
  };
  const addElement = e => {
    if (
      e.target.value.length < 4 &&
      props.closeButtonRef.current &&
      !(props.closeButtonRef?.current == e?.relatedTarget)
    ) {
      setInputError({
        error: true,
        message: 'Авто не найдено'
      });
    } else {
      props.handleAdd(e);
      setInput('');
      setIsAdding(false);
      setInputError({
        error: false,
        message: ''
      });
    }
  };
  const onChanging = (value: string) => {
    setInput(value);
    setInputError({
      error: false,
      message: ''
    });
  };
  return (
    <div tw='bg-primary px-4 py-3 rounded-[16px]'>
      <h3 tw='text-secondary text-[13px] font-medium'>{props.title}</h3>
      <div>
        {props.data.map((item, idx) => (
          <div key={idx} tw='py-[12px] flex items-center justify-between border-b-[1px] border-[#EAECED]'>
            <div tw='flex items-center'>
              <div tw='bg-thirdly p-2 rounded-full'>{props.logIcon}</div>
              <div tw='ml-3 text-[16px] flex flex-col'>
                <h4 tw='text-primary font-medium'>{item?.title?.toUpperCase()}</h4>
                {item?.subTitle && (
                  <div tw='text-gray py-[2px] px-[4px] flex font-normal text-[14px] rounded-[4px]'>
                    {item?.subTitle?.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            <button type='button' onClick={() => props.handleRemove(item?.id)}>
              <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
            </button>
          </div>
        ))}
      </div>
      {isAdding && (
        <div tw='py-[12px]'>
          <div tw='text-secondary text-[13px] font-medium'>Госномер авто</div>
          <div tw='py-[12px] relative'>
            <input
              id='iin'
              type='tel'
              value={input}
              maxLength={12}
              onChange={e => onChanging(e.target.value)}
              onBlur={addElement}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  addElement(e);
                  e.target?.blur();
                }
              }}
              tw='bg-thirdly text-[#8E8E93] w-full border border-[#4EBC73] px-[16px] py-[12px] text-[16px] rounded-[16px]'
              css={[inputError.error && tw`border-[#FF3347]`]}
              placeholder={props.placeholder}
            />

            <button
              type='button'
              ref={props.closeButtonRef}
              tw='absolute right-[12px] top-[50%] translate-y-[-50%]'
              onClick={closeAdd}
            >
              {inputError.error ? (
                <div tw='rotate-180'>
                  <LinedInfoIcon fill={'#FF3347'} />
                </div>
              ) : (
                <CloseCircleIcon fill={'var(--font-primary-opposite)'} />
              )}
            </button>
          </div>
          {inputError.error && <div tw='text-[#FF3347] text-[13px]'>{inputError.message}</div>}
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
