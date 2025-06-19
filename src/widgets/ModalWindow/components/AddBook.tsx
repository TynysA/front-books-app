import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { useAddBookMutation, useAddFilesMutation, useGetAuthorsQuery } from '@/entities/base';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';
import Creatable from '@/shared/ui/actionsUI/CreatableSelect/CreatableSelect.tsx';
import Input from '@/shared/ui/actionsUI/Input/Input.tsx';
import { FileLoader } from '@/shared/ui/FileLoader';
import Textarea from '@/shared/ui/Textarea/Textarea.tsx';
import { BackdropLoader } from '@/widgets/BackdropLoader';
import { IAddBook } from '@/widgets/ModalWindow/components/addBook/types.ts';
import { addBookModalSchema } from '@/widgets/ModalWindow/model/validationSchema.ts';


const AddBook = props => {
  const { t } = useTranslation();
  const [epub, setEpub] = useState<File | null>(null);
  const [fb2, setFb2] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [fetchAddBook, { isLoading }] = useAddBookMutation();
  const [fetchAddFiles, { isLoading: fileLoading }] = useAddFilesMutation();
  const { data: authors, isLoading: authorsLoading } = useGetAuthorsQuery();

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(addBookModalSchema(t))
  });
  const uploadFunc = (e: ChangeEvent<HTMLInputElement>, docType: string) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (docType === 'epub') setEpub(file);
      else if (docType === 'fb2') setFb2(file);
      else if (docType === 'cover') setCover(file);
    }
  };

  const removeFunc = (e: MouseEvent, docType: string) => {
    e.preventDefault();
    if (docType === 'epub') setEpub(null);
    else if (docType === 'fb2') setFb2(null);
    else if (docType === 'cover') setCover(null);
  };

  const previewFunc = e => {
    console.log(e);
  };
  const addBook = (data: IAddBook) => {
    console.log(data);
    console.log(epub);
    console.log(fb2);
    console.log(cover);
  };

  return (
    <form tw='flex flex-col gap-[20px]' onSubmit={handleSubmit(addBook)}>
      {(isLoading || fileLoading || authorsLoading) && <BackdropLoader />}
      <h2 tw='text-[#0F2920] text-[22px] font-semibold leading-[100%] text-center'>{t('books.create')}</h2>
      <Input type='text' control={control} id={'title'} name='title' placeholder={t('books.title')} />
      <Creatable options={authors} control={control} name='authors' placeholder={t('books.authors')} id={'authors'} />
      <Textarea
        control={control}
        showErrorBorder={true}
        placeholder={t('books.description')}
        id={'description'}
        name={'description'}
      />
      <FileLoader
        pretext={t('books.add-cover')}
        docType={'cover'}
        file={cover}
        uploadFunc={uploadFunc}
        removeFunc={removeFunc}
        previewFunc={previewFunc}
      />
      <FileLoader
        pretext={t('books.add-file-fb2')}
        docType={'fb2'}
        file={fb2}
        uploadFunc={uploadFunc}
        removeFunc={removeFunc}
      />
      <FileLoader
        pretext={t('books.add-file-epub')}
        docType={'epub'}
        file={epub}
        uploadFunc={uploadFunc}
        removeFunc={removeFunc}
      />
      <div tw='flex gap-[30px]'>
        <Button variant={'material'} twStyle={tw`grow w-[50%]`} onClick={props.handleClose} type={'button'}>
          {t('common.cancel')}
        </Button>
        <Button variant={'material'} twStyle={tw`bg-[#2BC48A] text-white grow w-[50%]`} type={'submit'}>
          {t('common.confirm')}
        </Button>
      </div>
    </form>
  );
};

export default AddBook;
