import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div tw='bg-black overflow-hidden'>
      <p tw='text-white'>{t('getStarted')}</p>
    </div>
  );
};

export default MainPage;
