import 'twin.macro';

import { Link } from 'react-router-dom';

export const BooksList = ({ books, twStyle }) => {
  return (
    <div css={[twStyle]}>
      {books?.length === 0 && <div>Нету произведений</div>}
      {books?.map(book => (
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
  );
};
