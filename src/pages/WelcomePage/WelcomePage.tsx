import 'twin.macro';

import { useTranslation } from 'react-i18next';

import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  const books = [
    { id: 1, title: 'Война и мир – Лев Толстой' },
    { id: 2, title: 'Преступление и наказание – Фёдор Достоевский' },
    { id: 3, title: 'Гордость и предубеждение – Джейн Остин' },
    { id: 4, title: 'Гарри Поттер и философский камень – Дж. К. Роулинг' },
    { id: 5, title: 'Тонкое искусство пофигизма – Марк Мэнсон' },
    { id: 6, title: 'Бегущий в лабиринте – Джеймс Дэшнер' },
    { id: 7, title: 'Атомные привычки – Джеймс Клир' },
    { id: 8, title: 'Думай и богатей – Наполеон Хилл' },
    { id: 9, title: 'Сапиенс: Краткая история человечества – Юваль Ной Харари' },
    { id: 10, title: 'Гарри Поттер и методы рационального мышления – Элиезер Юдковский' },
    { id: 11, title: 'Перси Джексон: Новая эра – автор неизвестен' },
    { id: 12, title: 'Тень будущего – фанфик по миру Властелина колец' }
  ];

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
            {books.map(book => (
              <div key={book.id} tw='bg-white p-6 rounded-2xl shadow-lg'>
                <img
                  alt='image'
                  tw='w-full object-cover mb-4 rounded-lg'
                  src={`https://abdhwatiqpeztisaxtlu.supabase.co/storage/v1/object/public/books/cover/2_cover`}
                />
                <a href={`/books/${book.id}`} tw='text-blue-500 underline block'>
                  {book.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
