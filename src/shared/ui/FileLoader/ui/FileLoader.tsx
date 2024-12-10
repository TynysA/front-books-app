import 'twin.macro';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import FileGreenCheckIcon from '@/shared/assets/icons/FileGreenCheckIcon';
import FileGreenPlusIcon from '@/shared/assets/icons/FileGreenPlusIcon';
import FileRemoveIcon from '@/shared/assets/icons/FileRemoveIcon';

import { IFileLoader } from '../types';

export const FileLoader = ({
  pretext,
  file,
  uploadFunc,
  removeFunc,
  previewFunc,
  docType,
  pretextStyle,
  disabled = false
}: IFileLoader) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRemove = (e, docType) => {
    removeFunc(e, docType);
    inputRef.current.value = null;
  };

  return (
    <div tw='flex flex-col gap-[10px]'>
      {pretext && (
        <p tw='text-[14px] font-bold leading-[normal]' css={[pretextStyle]}>
          {pretext}
        </p>
      )}
      <div tw='flex gap-[10px]'>
        <label tw='block w-[40px] h-[40px] bg-white rounded-[5px] shadow-file p-[8px]'>
          {file ? <FileGreenCheckIcon /> : <FileGreenPlusIcon />}
          <input disabled={disabled} ref={inputRef} type='file' tw='hidden' onChange={e => uploadFunc(e, docType)} />
        </label>
        <div tw='flex gap-[10px] justify-between items-center w-full border-b-[1px] border-b-[#B7B7B7]'>
          <p tw='max-w-[300px] truncate text-[14px] text-[#C9C9C9] leading-[normal]'>
            {file ? `File ${file.name || file.type}` : t('modal.file-none')}
          </p>
          <button onClick={e => handleRemove(e, docType)} type={'button'}>
            <FileRemoveIcon />
          </button>
        </div>
      </div>
      <div tw='flex justify-end'>
        {file && (
          <button
            type={'button'}
            onClick={e => previewFunc(e, file, docType)}
            tw='py-[4px] px-[7px] rounded-[5px] bg-[#4BB34B] text-[10px] leading-[normal] text-white'
          >
            {t('modal.preview')}
          </button>
        )}
      </div>
    </div>
  );
};
