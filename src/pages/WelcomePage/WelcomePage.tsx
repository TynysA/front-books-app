import 'twin.macro';

import { useTranslation } from 'react-i18next';

import { useGetBooksQuery } from '@/entities/base';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useGetBooksQuery();

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
              <h2 tw='text-2xl font-bold mb-4'>📖 Добро пожаловать в мир книг – читайте, загружайте, делитесь!</h2>
              <p>
                Чтение — это не просто увлечение, а целый мир, который открывается перед каждым, кто берёт в руки книгу.
                Кто-то любит погружаться в классические произведения, наслаждаясь утончённым стилем авторов прошлого, а
                кто-то предпочитает современную литературу, наполненную динамичным сюжетом и живыми эмоциями.
              </p>
              <p tw='mt-4 font-semibold'>
                Наш сайт создан для всех, кто ценит книги и хочет иметь свободный доступ к знаниям и развлечению. Здесь
                вы можете <strong>читать, скачивать и загружать</strong> книги <strong>совершенно бесплатно</strong>.
              </p>
            </div>

            <div tw='bg-white p-6 rounded-2xl shadow-lg'>
              <h2 tw='text-2xl font-bold mb-4'>🔍 Удобный поиск и большой выбор</h2>
              <p>
                Мы собрали библиотеку, в которой вы найдёте книги{' '}
                <strong>в самых разных форматах – PDF, EPUB, FB2, MOBI и другие</strong>. Это значит, что вы можете
                выбирать удобный способ чтения, будь то экран смартфона, электронная книга или компьютер.
              </p>
              <ul tw='mt-4 list-disc list-inside space-y-2'>
                <li>
                  📚 <strong>Классическая литература</strong> – вечные произведения, которые остаются актуальными на все
                  времена.
                </li>
                <li>
                  🔥 <strong>Современные бестселлеры</strong> – книги, покорившие миллионы читателей по всему миру.
                </li>
                <li>
                  📖 <strong>Нон-фикшн</strong> – книги, которые помогают учиться, развиваться и находить новые идеи.
                </li>
                <li>
                  ✨ <strong>Фантастика, фэнтези, детективы, романтика</strong>, научные труды, книги по саморазвитию и
                  многое другое.
                </li>
                <li>
                  📝 <strong>Фанфики</strong> – альтернативные истории и творческие переосмысления любимых вселенных.
                </li>
              </ul>
            </div>

            <div tw='bg-white p-6 rounded-2xl shadow-lg'>
              <h2 tw='text-2xl font-bold mb-4'>📤 Поделитесь своей книгой</h2>
              <p>
                Наш проект открыт для всех! Если у вас есть интересная книга, которой вы хотите поделиться с другими,{' '}
                <strong>загрузите её</strong>. Администрация проверит ваш файл или заявку и добавит его в библиотеку,
                чтобы другие читатели тоже смогли насладиться чтением.
              </p>
              <p tw='mt-4 bg-yellow-100 p-4 rounded-lg'>
                💡 <strong>Важно!</strong> Перед тем как отправить книгу, обязательно ознакомьтесь с{' '}
                <a href='#' tw='text-blue-500 underline'>
                  правилами загрузки
                </a>
                . Мы следим за качеством контента и уважаем авторские права.
              </p>
              <p tw='mt-4 font-semibold text-lg'>
                📚 Откройте для себя бесконечный мир книг! Читайте с удовольствием, находите новые истории, делитесь
                любимыми произведениями и наслаждайтесь магией слова! 🚀
              </p>
            </div>
          </div>
          <div tw='hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map(book => (
              <a
                key={book.id}
                href={`/book/${book.bookId}`}
                tw='bg-white p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col gap-[20px] no-underline'
              >
                <img
                  title={book.title}
                  alt={`image_${book.bookId}`}
                  tw='w-full aspect-[1/1.5] object-cover rounded-lg'
                  src={`https://abdhwatiqpeztisaxtlu.supabase.co/storage/v1/object/public/books/cover/${book.bookId}_cover`}
                />
                <span
                  tw='block text-ellipsis whitespace-nowrap overflow-hidden text-black text-[16px] font-medium'
                  title={book.title}
                >
                  {book.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
