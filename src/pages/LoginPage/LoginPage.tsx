import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useTypedDispatch } from '@/app/store';
import { setAuth } from '@/entities/user';
import { loginSchema } from '@/pages/LoginPage/model/validationSchema.ts';
import { pathnames } from '@/shared/lib/constants.ts';
import Button from '@/shared/ui/actionsUI/Button/Button.tsx';
import Input from '@/shared/ui/actionsUI/Input/Input.tsx';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema(t))
  });

  const onFinish = data => {
    dispatch(setAuth(true));
    navigate(pathnames.main);
  };

  return (
    <div tw='min-h-screen w-full flex justify-center items-center text-primary'>
      <div tw='text-center max-w-[500px] grow'>
        <h1 tw='text-[30px] font-black mb-[20px]'>{t('auth.title')}</h1>
        <form onSubmit={handleSubmit(onFinish)}>
          <div tw='flex flex-col gap-[20px] mb-[50px]'>
            <Input
              variant={'transparent'}
              placeholder={t('auth.username')}
              name='username'
              id={'username'}
              showErrorBorder={true}
              showError={true}
              control={control}
            />
            <Input
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
          </div>
          <Button twStyle={tw`w-full`} type={'submit'}>
            {t('auth.login')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
