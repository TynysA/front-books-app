import 'twin.macro';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import CommentWrite from '@/features/main/element/components/CommentWrite.tsx';
import { CommentType } from '@/features/main/model/types';
import { commentSchema } from '@/features/main/model/validationSchema';
import Button from '@/shared/ui/actionsUI/Button/Button';
import { beautifyDate } from '@/shared/utils';

type Props = {
  comment: CommentType;
  activeReplyForm: string | null;
  setActiveReplyForm: (id: string | null) => void;
  handleReplySubmit: (parentId: string, data: any, resetReplyForm: () => void) => void;
  depth?: number;
};

const CommentItem = ({ comment, activeReplyForm, setActiveReplyForm, handleReplySubmit, depth = 0 }: Props) => {
  const { t } = useTranslation();

  const { id, author, text, createdAt, likes, replies } = comment;

  const { control, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(commentSchema(t))
  });

  const onReplySubmit = async (data: any) => {
    handleReplySubmit(id, data, () => reset());
    setActiveReplyForm(null);
  };

  return (
    <div css={[tw`mt-4`, depth > 0 && tw`ml-6 pl-4 border-l border-gray-50`]}>
      <div tw='flex items-center text-sm text-gray mb-1'>
        <span tw='font-semibold'>{author?.username}</span>
        <span tw='ml-2 text-xs text-gray'>{beautifyDate(new Date(createdAt))}</span>
      </div>

      <div tw='text-base text-gray whitespace-pre-line'>{text}</div>

      <div tw='flex items-center gap-4 mt-1'>
        {activeReplyForm === id ? (
          <button tw='text-red-500 text-sm' type='button' onClick={() => setActiveReplyForm(null)}>
            Отмена
          </button>
        ) : (
          <Button
            variant='secondary'
            type='button'
            onClick={() => onReplySubmit(id)}
            twStyle={tw`bg-[#4582af] py-[6px] opacity-65 hover:opacity-100 `}
          >
            Отправить
          </Button>
        )}
        <span tw='text-sm text-gray'>👍 {likes}</span>
      </div>

      {/* Форма ответа */}
      {activeReplyForm === id && <CommentWrite parentId={id} onSubmit={onReplySubmit} />}

      {/* Рекурсивные вложенные ответы */}
      {replies && replies.length > 0 && (
        <div tw='mt-2'>
          {replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              activeReplyForm={activeReplyForm}
              setActiveReplyForm={setActiveReplyForm}
              handleReplySubmit={handleReplySubmit}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
