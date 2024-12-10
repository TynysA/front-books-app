import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import Checkbox from '@/shared/ui/Checkbox/Checkbox.tsx';

const MainPage = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm();
  const [amount, setAmount] = useState(100);

  const onSubmit = data => {
    console.log(data);
  };
  // const [file, setFile] = useState<File | null>({ file: tempFile, type: 'application/pdf', name: 'some File name' });

  return (
    <div tw='bg-black overflow-hidden'>
      <p tw='text-white'>{t('getStarted')}</p>
      <div tw='bg-white py-[80px] px-[30px] mb-[20px]'>{/*<FileLoader file={file} />*/}</div>
      <div tw='bg-white py-[80px] px-[30px]'></div>

      <div tw='py-[20px] px-[30px]'>
        <Checkbox
          twStyle={tw`mt-[15px]`}
          control={control}
          name='is_car_auto'
          id='is_car_auto'
          label='Буду управлять авто '
          disabled={false}
          isWhite={false}
          hasWord={false}
          showError={false}
        />
        <Checkbox
          twStyle={tw`mt-[15px]`}
          control={control}
          name='is_car_not_auto'
          id='is_car_not_auto'
          label='Буду управлять авто '
          disabled={false}
          isWhite={false}
          hasWord={true}
          showError={false}
        />
      </div>
      <div tw='bg-white overflow-hidden mt-[15px] py-[20px] px-[30px]'>
        <Checkbox
          twStyle={tw`mt-[15px]`}
          control={control}
          name='is_representative'
          id='is_representative'
          label='Льготы'
          labelInfo={true}
          disabled={false}
          isWhite={true}
          hasWord={false}
          showError={false}
        />
      </div>
    </div>
  );
};

export default MainPage;
