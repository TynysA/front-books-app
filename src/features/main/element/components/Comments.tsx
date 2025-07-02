import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import CommentItem from '@/features/main/element/components/CommentItem.tsx';
import { CommentType, mockCommentsData } from '@/features/main/model/types';
import { commentSchema } from '@/features/main/model/validationSchema';
import Button from '@/shared/ui/actionsUI/Button/Button';
import Textarea from '@/shared/ui/Textarea/Textarea';

const Comments = () => {
  const { t } = useTranslation();
  const [comments, setComments] = useState<CommentType[]>(mockCommentsData);
  const [activeReplyForm, setActiveReplyForm] = useState<string | null>(null);

  const { control, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(commentSchema(t))
  });

  const submitComment = async (text: string, parentId: string | null = null) => {
    try {
      console.log({
        text,
        parentId
      });
      reset();
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
      <form id='write-comment' onSubmit={handleSubmit(handleMainSubmit)}>
        <Textarea placeholder={t('comments.write-comment')} id='comment' name='comment' control={control} />
        <Button variant='grey' type='submit'>
          Отправить
        </Button>
      </form>

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

type ReplyFormProps = {
  parentId: string;
  onSubmit: (data: any, resetReplyForm: () => void) => void;
};

const ReplyForm = ({ parentId, onSubmit }: ReplyFormProps) => {
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(commentSchema(t))
  });

  const handleReplySubmit = async (data: any) => {
    await onSubmit(data, () => reset());
  };

  return (
    <form onSubmit={handleSubmit(handleReplySubmit)} tw='mt-2'>
      <Textarea placeholder={t('comments.write-reply')} id={`reply-${parentId}`} name='comment' control={control} />
      <Button variant='grey' type='submit' size='small'>
        Отправить
      </Button>
    </form>
  );
};

export default Comments;
