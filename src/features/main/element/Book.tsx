import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useGetOneBookQuery } from '@/entities/base';
import BookItem from '@/features/main/element/BookItem.tsx';
import Container from '@/shared/ui/Container/Container.tsx';
import Header from '@/shared/ui/Header.tsx';
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
  const { data: book, isLoading } = useGetOneBookQuery(id);

  if (isLoading) return <FullScreenLoader />;

  return (
    <div tw='bg-root overflow-hidden flex flex-col bg-[#4582af] text-primary min-h-screen'>
      <div tw='bg-[#4582af]'>
        <Header />
      </div>

      <Container>
        <BookItem book={book} />
        {/*<Comments />*/}
      </Container>
    </div>
  );
};

export default Book;
