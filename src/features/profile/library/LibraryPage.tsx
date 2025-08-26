import 'twin.macro';

import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import tw from 'twin.macro';

import { BooksList } from '@/shared/ui/book/BookList.tsx';

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
  const { combinedData } = useOutletContext();
  const [books, setBooks] = useState(combinedData ?? []);

  useEffect(() => {
    setBooks(combinedData ?? []);
  }, [combinedData]);
  return (
    <div tw='mt-[15px]'>
      <BooksList books={books} twStyle={tw`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6`} />
    </div>
  );
};

export default LibraryPage;
