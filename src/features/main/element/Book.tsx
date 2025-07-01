import 'twin.macro';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from '@/app/store';
import { useGetOneBookQuery } from '@/entities/base';
import HeartLike from '@/shared/assets/icons/HeartLike.tsx';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';
import { beautifyDate } from '@/shared/utils';
import { FullScreenLoader } from '@/widgets/FullScreenLoader';
const mockComments = [
  {
    id: '1',
    author: {
      id: 'user1',
      username: 'Смолин Павел',
      avatar: null
    },
    text: 'Глава 1 - послезавтра.',
    createdAt: '2025-07-01T20:33:00Z',
    likes: 16,
    replies: [
      {
        id: '2',
        author: {
          id: 'user2',
          username: 'Роман Е.',
          avatar: null
        },
        text: 'Поставил сердечко сегодня за послезавтра :)',
        createdAt: '2025-07-01T22:20:00Z',
        likes: 6,
        replies: []
      },
      {
        id: '3',
        author: {
          id: 'user3',
          username: 'Владимир Атомный',
          avatar: null
        },
        text: 'Удачи, братишка ✌️',
        createdAt: '2025-07-01T22:05:00Z',
        likes: 6,
        replies: []
      }
    ]
  },
  {
    id: '4',
    author: {
      id: 'user4',
      username: 'Фома А.',
      avatar: null
    },
    text: '🔥👌',
    createdAt: '2025-07-01T20:41:00Z',
    likes: 6,
    replies: []
  },
  {
    id: '5',
    author: {
      id: 'user5',
      username: 'ALEX',
      avatar: null
    },
    text: 'Отлично. Ждём.',
    createdAt: '2025-07-01T20:34:00Z',
    likes: 9,
    replies: []
  }
];

const Book = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { user } = useTypedSelector(state => state.auth);
  const { data: book, isLoading } = useGetOneBookQuery(id);
  const [isLiked, setIsLiked] = useState(user?.likedBooks.includes(book?.bookId));

  const handleLikeClick = () => {
    if (book?.bookId) {
      setIsLiked(true);
    }
  };

  if (isLoading) return <FullScreenLoader />;

  return (
    <div tw='bg-root overflow-hidden flex flex-col bg-[#4582af] text-primary min-h-screen'>
      <div tw='bg-[#4582af]'>
        <Header />
      </div>
      <Container>
        <div tw='flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start py-8'>
          <div tw='w-full max-w-[280px] md:max-w-[300px] h-[400px] md:h-[450px] overflow-hidden rounded-xl shadow-md'>
            <img
              title={book?.title}
              alt={`cover_${book?.bookId}`}
              tw='w-full h-full object-cover'
              src={`https://abdhwatiqpeztisaxtlu.supabase.co/storage/v1/object/public/books/cover/${book?.bookId}_cover`}
            />
          </div>

          <div tw='flex flex-col gap-4 w-full'>
            <h1 tw='text-black text-[22px] md:text-[28px] font-bold text-center md:text-left' title={book?.title}>
              {book?.title}
            </h1>
            <div tw='flex gap-[15px]'>
              <div tw='px-[10px] py-[4px] bg-white text-black rounded-[8px] hover:bg-[#e6e6e6] duration-300 ease-linear '>
                + {t('books.add-to-library')}
              </div>
              <div tw='w-[24px] cursor-pointer' onClick={handleLikeClick}>
                <HeartLike fill={isLiked ? '#FF0000' : 'none'} stroke={isLiked ? '#FF0000' : 'black'} />
              </div>
            </div>

            <p tw='text-black text-[16px] md:text-[18px] leading-relaxed text-justify whitespace-pre-line'>
              {book?.description}
            </p>

            <div tw='text-black text-[16px] md:text-[18px]'>
              <strong>{t('books.authors')}:</strong> {book?.author?.join(', ') || 'Unknown'}
            </div>

            <div tw='text-black text-[16px] md:text-[18px]'>
              <strong>{t('books.language')}:</strong> {book?.language ? t(`books.${book.language}`) : 'N/A'}
            </div>
          </div>
        </div>
        <div tw='mt-8 bg-white rounded-[10px] px-[30px] py-[12px]'>
          <h2 tw='text-xl font-semibold mb-4'>Комментарии</h2>

          <textarea tw='w-full p-3 border rounded mb-2' placeholder='Написать комментарий...' rows={4} />
          <button tw='px-4 py-2 bg-blue-600 text-white rounded'>Отправить</button>

          <div tw='mt-6 space-y-4'>
            {mockComments.map(c => (
              <div key={c.id} tw='py-4 border-t'>
                <div tw='text-sm text-gray mb-1'>
                  {c.author.username} • {beautifyDate(c.createdAt)}
                </div>
                <div tw='text-base text-gray whitespace-pre-line'>{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Book;
