import { MODAL_TYPES } from '@/shared/lib/modalTypes.ts';
import AddBook from '@/widgets/ModalWindow/components/AddBook.tsx';

export const getModalComponent = type => {
  switch (type) {
    case MODAL_TYPES.ADD_BOOK:
      return AddBook;
    default:
      return null;
  }
};
