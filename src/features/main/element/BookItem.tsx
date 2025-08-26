import 'twin.macro';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { useTypedSelector } from '@/app/store';
import { useAddToLibraryMutation, useLikeBookMutation } from '@/entities/user/api/user.ts';
import { IBook } from '@/features/main/types.ts';
import HeartLike from '@/shared/assets/icons/HeartLike.tsx';
import { BackdropLoader } from '@/widgets/BackdropLoader';

const BookItem = ({ book }: { book: IBook }) => {
  const { t } = useTranslation();
  const { user } = useTypedSelector(state => state.auth);

  const [isLiked, setIsLiked] = useState(false);
  const [fetchLikeBook, { isLoading: likeLoading }] = useLikeBookMutation();
  const [fetchAddToLibrary, { isLoading: libraryLoading }] = useAddToLibraryMutation();

  useEffect(() => {
    if (user?.likedBooks?.includes(book.bookId)) {
      setIsLiked(true);
    }
  }, [user?.likedBooks, book.bookId]);

  const handleLikeClick = async () => {
    try {
      await fetchLikeBook(book.bookId).unwrap();
      setIsLiked(prev => !prev);
      toast.success(isLiked ? 'Книга удалена из избранного' : 'Книга добавлена в избранное', {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 10000
      });
    } catch (error) {
      toast.error((() => 'Не удалось изменить избранное')(), {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  };

  const handleAddToLibraryClick = async () => {
    try {
      await fetchAddToLibrary(book.bookId).unwrap();
      toast.success('Книга добавлена в библиотеку!', {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 3000
      });
    } catch (error) {
      toast.error((() => 'Не удалось добавить в библиотеку')(), {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  };

  return (
    <div tw='flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start py-8'>
      {(likeLoading || libraryLoading) && <BackdropLoader />}

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

        <div tw='flex gap-[15px]'>
          <button
            onClick={handleAddToLibraryClick}
            tw='px-[10px] py-[4px] bg-white text-black rounded-[8px] hover:bg-[#e6e6e6] duration-300 ease-linear'
            disabled={libraryLoading}
          >
            + {t('books.add-to-library')}
          </button>
          <button
            onClick={() =>
              toast.error((() => 'Не удалось добавить в библиотеку')(), {
                position: 'top-center',
                hideProgressBar: true,
                autoClose: 3000
              })
            }
            tw='px-[10px] py-[4px] bg-white text-black rounded-[8px] hover:bg-[#e6e6e6] duration-300 ease-linear'
            disabled={libraryLoading}
          >
            toast
          </button>

          <button
            type='button'
            tw='w-[24px] cursor-pointer'
            onClick={handleLikeClick}
            disabled={likeLoading}
            title={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
          >
            <HeartLike fill={isLiked ? '#FF0000' : 'none'} stroke={isLiked ? '#FF0000' : 'black'} />
          </button>
        </div>

        <p tw='text-black text-[16px] md:text-[18px] leading-relaxed text-justify whitespace-pre-line'>
          {book.description}
        </p>

        <div tw='text-black text-[16px] md:text-[18px]'>
          <strong>{t('books.authors')}:</strong> {book.author?.join(', ') || 'Unknown'}
        </div>

        <div tw='text-black text-[16px] md:text-[18px]'>
          <strong>{t('books.language')}:</strong> {book.language ? t(`books.${book.language}`) : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
