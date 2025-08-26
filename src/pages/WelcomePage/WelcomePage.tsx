import 'twin.macro';

import { Trans, useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { useGetBooksQuery } from '@/entities/base';
import { BooksList } from '@/shared/ui/book/BookList.tsx';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const WelcomePage = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetBooksQuery('');

  if (isLoading) return <FullScreenLoader />;

  return (
    <div tw='bg-root overflow-hidden flex flex-col bg-[#4582af] gap-[15px] text-primary'>
      <div tw='bg-[#4582af]'>
        <Header />
      </div>
      <Container>
        <div tw='flex flex-row gap-[25px] items-start'>
          <div tw='max-w-xs space-y-6 text-gray'>
            <div tw='bg-white p-6 rounded-2xl shadow-lg'>
              <h2 tw='text-2xl font-bold mb-4'>{t('welcome.welcomeTitle')}</h2>
              <p>{t('welcome.welcomeText1')}</p>
              <p tw='mt-4 font-semibold'>
                <Trans i18nKey='welcome.welcomeText2' components={{ 1: <strong />, 3: <strong /> }} />
              </p>
            </div>

            <div tw='bg-white p-6 rounded-2xl shadow-lg'>
              <h2 tw='text-2xl font-bold mb-4'>{t('welcome.searchTitle')}</h2>
              <p>
                <Trans i18nKey='welcome.searchText' components={{ 1: <strong /> }} />
              </p>
              <ul tw='mt-4 list-disc list-inside space-y-2'>
                <li>
                  <Trans i18nKey='welcome.searchList.classic' components={{ 1: <strong /> }} />
                </li>
                <li>
                  <Trans i18nKey='welcome.searchList.bestsellers' components={{ 1: <strong /> }} />
                </li>
                <li>
                  <Trans i18nKey='welcome.searchList.nonFiction' components={{ 1: <strong /> }} />
                </li>
                <li>
                  <Trans i18nKey='welcome.searchList.genres' components={{ 1: <strong /> }} />
                </li>
                <li>
                  <Trans i18nKey='welcome.searchList.fanfics' components={{ 1: <strong /> }} />
                </li>
              </ul>
            </div>

            <div tw='bg-white p-6 rounded-2xl shadow-lg'>
              <h2 tw='text-2xl font-bold mb-4'>{t('welcome.shareTitle')}</h2>
              <p>
                <Trans i18nKey='welcome.shareText1' components={{ 1: <strong /> }} />
              </p>
              <p tw='mt-4 bg-yellow-100 p-4 rounded-lg'>
                <Trans
                  i18nKey='welcome.shareWarning'
                  components={{
                    1: <strong />,
                    3: <a href='#' tw='text-blue-500 underline' />
                  }}
                />
              </p>
              <p tw='mt-4 font-semibold text-lg'>{t('welcome.shareText2')}</p>
            </div>
          </div>
          <BooksList books={data} twStyle={tw`hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`} />
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
