import 'twin.macro';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      {data.length === 0 ? (
        <div tw='text-white text-center mt-10 text-lg'>Нет понравившихся книг</div>
      ) : (
        <div tw='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.map(book => (
            <Link
              key={book.id}
              to={`/book/${book.bookId}`}
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedPage;
