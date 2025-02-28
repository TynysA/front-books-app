import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { ILoginFormValues } from '@/pages/LoginPage/model/type.ts';
import { registerSchema } from '@/pages/LoginPage/model/validationSchema.ts';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';
import Input from '@/shared/ui/actionsUI/Input/Input.tsx';
import Select from '@/shared/ui/actionsUI/Select/Select.tsx';

const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(registerSchema(t))
  });

  const onFinish = data => {
    console.log(data);
    // navigate(pathnames.main);
  };
  const roleList = [
    {
      label: t('auth.role.teacher'),
      value: 'Teacher'
    },
    {
      label: t('auth.role.student'),
      value: 'Student'
    }
  ];

  return (
    <div tw='min-h-screen w-full flex justify-center items-center text-primary'>
      <div tw='text-center max-w-[500px] grow'>
        <h1 tw='text-[30px] font-black mb-[20px]'>{t('auth.reg')}</h1>
        <form onSubmit={handleSubmit(onFinish)}>
          <div tw='flex flex-col gap-[20px] mb-[50px]'>
            <Input<ILoginFormValues>
              variant={'transparent'}
              placeholder={t('auth.username')}
              name='username'
              id={'username'}
              showErrorBorder={true}
              showError={true}
              control={control}
            />
            <Input<ILoginFormValues>
              variant={'transparent'}
              placeholder={t('auth.password')}
              name={'password'}
              id={'password'}
              control={control}
              type='password'
              showErrorBorder={true}
              showError={true}
              isHiddenLetter={true}
            />
            <Input<ILoginFormValues>
              variant={'transparent'}
              placeholder={t('auth.confirm-password')}
              name={'confirmPassword'}
              id={'confirmPassword'}
              control={control}
              type='password'
              showErrorBorder={true}
              showError={true}
              isHiddenLetter={true}
            />
            <div tw='flex items-center gap-[10px]'>
              <span>{t('auth.role')}</span>
              <div tw='flex-1'>
                <Select
                  showError={true}
                  showErrorBorder={true}
                  placeholder={t('auth.choose-role')}
                  name='role'
                  control={control}
                  options={roleList}
                  getOptionLabel={option => option.label}
                  getOptionValue={option => option.value}
                />
              </div>
            </div>
          </div>
          <Button twStyle={tw`w-full`} type={'submit'}>
            {t('auth.sign-up')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
