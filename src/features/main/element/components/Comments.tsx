import 'twin.macro';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CommentItem from '@/features/main/element/components/CommentItem.tsx';
import CommentWrite from '@/features/main/element/components/CommentWrite.tsx';
import { CommentType, mockCommentsData } from '@/features/main/model/types';

const Comments = () => {
  const { t } = useTranslation();
  const [comments, setComments] = useState<CommentType[]>(mockCommentsData);
  const [activeReplyForm, setActiveReplyForm] = useState<string | null>(null);

  const submitComment = async (text: string, parentId: string | null = null) => {
    try {
      console.log({
        text,
        parentId
      });
      setActiveReplyForm(null);
      // Здесь перезагрузка комментариев с бэка (пока заглушка)
      // fetchComments();
    } catch (error) {
      console.error('Ошибка отправки комментария:', error);
    }
  };

  const handleMainSubmit = async (data: any) => {
    await submitComment(data.comment);
  };

  const handleReplySubmit = async (parentId: string, data: any, resetReplyForm: () => void) => {
    await submitComment(data.comment, parentId);
    resetReplyForm();
  };

  return (
    <div tw='mt-8 bg-white rounded-[10px] px-6 py-4'>
      <h2 tw='text-xl font-semibold mb-4'>Комментарии</h2>

      {/* Форма для главного комментария */}
      <CommentWrite onSubmit={handleMainSubmit} />

      {/* Список комментариев */}
      <div tw='mt-6 space-y-4'>
        {comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            activeReplyForm={activeReplyForm}
            setActiveReplyForm={setActiveReplyForm}
            handleReplySubmit={handleReplySubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
