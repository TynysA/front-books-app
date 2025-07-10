import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@pbe/react-yandex-maps';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { commentSchema } from '@/features/main/model/validationSchema.ts';
import Textarea from '@/shared/ui/Textarea/Textarea.tsx';
type CommentWriteProps = {
  parentId?: string;
  onSubmit: (data: any, resetReplyForm: () => void) => void;
};

const CommentWrite = ({ parentId, onSubmit }: CommentWriteProps) => {
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(commentSchema(t))
  });

  const handleReplySubmit = async (data: any) => {
    await onSubmit(data, () => reset());
  };

  return (
    <form id='write-comment' onSubmit={handleSubmit(handleReplySubmit)}>
      <Textarea placeholder={t('comments.write-comment')} id='comment' name='comment' control={control} />
      <Button
        variant='secondary'
        type='button'
        onClick={handleReplySubmit}
        twStyle={tw`bg-[#4582af] py-[6px] opacity-65 hover:opacity-100 `}
      >
        Отправить
      </Button>
    </form>
  );
};

export default CommentWrite;
