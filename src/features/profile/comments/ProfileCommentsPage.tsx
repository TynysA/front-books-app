import 'twin.macro';

import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { beautifyDate } from '@/shared/utils';

const mockComments = [
  {
    _id: '1',
    text: 'Очень интересная книга! Кто может подсказать что-то похожее?',
    createdAt: '2025-06-22T10:30:00',
    book: {
      _id: 'book1',
      title: 'Жизнь сурка'
    }
  },
  {
    _id: '2',
    text: 'Честно сложно сказать... Вроде всё интересно даже увлекательно, но...',
    createdAt: '2025-06-20T15:45:00',
    book: {
      _id: 'book2',
      title: 'Алекс и Алекс, 5'
    }
  },
  {
    _id: '3',
    text: 'Если прошлая книга мне всё же нравилась, то эта... Ну прям не очень.',
    createdAt: '2025-06-18T09:00:00',
    book: {
      _id: 'book3',
      title: 'Иностранец 6 Возвращение домой'
    }
  }
];

const ProfileCommentsPage = () => {
  const { t } = useTranslation();

  return (
    <div tw='bg-white p-4 rounded-md shadow w-full'>
      <h2 tw='text-[20px] font-bold mb-3'>
        {mockComments?.length > 0 ? mockComments?.length + t('profile.comments-title') : t('profile.comments-empty')}
      </h2>

      <div tw='flex flex-col gap-4'>
        {mockComments.map(comment => (
          <div key={comment._id} tw='border border-gray-300 rounded p-3 bg-gray-50'>
            <div tw='text-[12px] text-gray mb-1'>
              <Trans
                i18nKey='profile.comments-written'
                components={{
                  1: <span tw='text-blue-600 font-medium'>комментарий</span>
                }}
              />
              <Link to={`/books/${comment.book._id}`} tw='text-blue-600 font-semibold hover:underline'>
                {comment.book.title}
              </Link>
            </div>

            <div tw='text-gray text-[14px] mb-2'>{comment.text}</div>

            <div tw='text-[12px] text-gray'>{beautifyDate(comment.createdAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCommentsPage;
