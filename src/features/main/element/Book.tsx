import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useGetOneBookQuery } from '@/entities/base';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';

const Book = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useGetOneBookQuery();
  const book = {
    _id: '67f11ecc6b0b30164e697f75',
    title: 'Война и мир. Книга 1',
    description:
      '"Война и мир" - роман-эпопея Льва Толстого, одно из крупнейших произведений мировой литературы, описывающее жизнь русского общества в эпоху Наполеоновских войн. "Война и мир" - это масштабная картина жизни России, взятая во всех ее социальных слоях (от крестьян до императора Александра I), и детальное описание хода военных действий, и осмысление поведения человека на войне, но главное - это глубокое философское осмысление и исследование жизни как таковой - в быту, в семье, в мирное время, на войне.',
    author: ['Лев Николаевич Толстой'],
    language: 'RU',
    bookId: 2,
    __v: 0
  };
  return (
    <div tw='bg-root overflow-hidden flex flex-col bg-[#4582af] text-primary min-h-screen'>
      <div tw='bg-[#4582af]'>
        <Header />
      </div>
      <Container>
        <div tw='flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start py-8'>
          <div tw='w-full max-w-[280px] md:max-w-[300px] h-[400px] md:h-[450px] overflow-hidden rounded-xl shadow-md'>
            <img
              title={book.title}
              alt={`cover_${book.bookId}`}
              tw='w-full h-full object-cover'
              src={`https://abdhwatiqpeztisaxtlu.supabase.co/storage/v1/object/public/books/cover/${book.bookId}_cover`}
            />
          </div>

          <div tw='flex flex-col gap-4 w-full'>
            <h1 tw='text-black text-[22px] md:text-[28px] font-bold text-center md:text-left' title={book.title}>
              {book.title}
            </h1>

            <p tw='text-black text-[16px] md:text-[18px] leading-relaxed text-justify whitespace-pre-line'>
              {book.description}
            </p>

            <div tw='text-black text-[16px] md:text-[18px]'>
              <strong>{t('book.authors')}:</strong> {book.author?.join(', ') || 'Unknown'}
            </div>

            <div tw='text-black text-[16px] md:text-[18px]'>
              <strong>{t('book.language')}:</strong> {book.language ? t(`books.${book.language}`) : 'N/A'}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Book;
