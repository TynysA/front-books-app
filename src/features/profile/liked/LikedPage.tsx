import 'twin.macro';

import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import { BooksList } from '@/shared/ui/book/BookList.tsx';

// Пример данных — замени на свой источник
const mockLikedBooks = [
  {
    id: '1',
    bookId: 'book-123',
    title: 'Властелин колец'
  },
  {
    id: '2',
    bookId: 'book-456',
    title: '1984'
  }
];

const LikedPage = () => {
  const [data, setData] = useState(mockLikedBooks);

  useEffect(() => {
    // Заменить на реальный источник данных
    setData(mockLikedBooks);
  }, []);

  return (
    <div tw='mt-[15px]'>
      <BooksList books={data} twStyle={tw`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6`} />
    </div>
  );
};

export default LikedPage;
