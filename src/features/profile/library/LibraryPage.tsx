import 'twin.macro';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Пример: заглушка данных
const mockLibraryBooks = [
  {
    id: '1',
    bookId: 'book-789',
    title: 'Мастер и Маргарита'
  },
  {
    id: '2',
    bookId: 'book-101',
    title: 'Преступление и наказание'
  }
];

const LibraryPage = () => {
  const [books, setBooks] = useState(mockLibraryBooks);

  useEffect(() => {
    // Здесь можно заменить на запрос к API или глобальное состояние
    setBooks(mockLibraryBooks);
  }, []);

  return (
    <div tw='mt-[15px]'>
      {books.length === 0 ? (
        <div tw='text-white text-center mt-10 text-lg'>Библиотека пуста</div>
      ) : (
        <div tw='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {books.map(book => (
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

export default LibraryPage;
