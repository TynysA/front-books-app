import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { useAddBookMutation, useAddFilesMutation } from '@/entities/base';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';
import Creatable from '@/shared/ui/actionsUI/CreatableSelect/CreatableSelect.tsx';
import Input from '@/shared/ui/actionsUI/Input/Input.tsx';
import { FileLoader } from '@/shared/ui/FileLoader';
import Textarea from '@/shared/ui/Textarea/Textarea.tsx';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';
import { addBookModalSchema } from '@/widgets/ModalWindow/model/validationSchema.ts';

const authors = [
  { label: 'Лев Николаевич Толстой', value: 'Лев Николаевич Толстой' },
  { label: 'Юрий Винокуров', value: 'Юрий Винокуров' },
  { label: 'Джейн Остин', value: 'Джейн Остин' }
];
const AddBook = props => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [fetchAddBook, { isLoading }] = useAddBookMutation();
  const [fetchAddFiles, { isLoading: fileLoading }] = useAddFilesMutation();

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(addBookModalSchema(t))
  });
  const uploadFunc = e => {
    console.log(e);
  };
  const removeFunc = e => {
    console.log(e);
  };
  const previewFunc = e => {
    console.log(e);
  };
  const addBook = data => {
    console.log(data);
  };
  if (isLoading || fileLoading) return <FullScreenLoader />;

  return (
    <form tw='flex flex-col gap-[20px]' onSubmit={handleSubmit(addBook)}>
      <h2 tw='text-[#0F2920] text-[22px] font-semibold leading-[100%] text-center'>{t('books.add-book')}</h2>
      <Input type='text' control={control} id={'title'} name='title' placeholder={t('books.title')} />
      <Creatable options={authors} control={control} name='authors' placeholder={t('books.authors')} id={'authors'} />
      {/*<Input type='text' control={control} id={'author'} name='author' placeholder={t('books.author')} />*/}
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
        pretext={t('books.add-file-type')}
        docType={'file'}
        file={file}
        uploadFunc={uploadFunc}
        removeFunc={removeFunc}
        previewFunc={previewFunc}
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
