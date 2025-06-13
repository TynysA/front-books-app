export const MODAL_TYPES = {
  OPEN_BOOK: 'open_test',
  ADD_BOOK: 'add_book',
  FORM: 'form',
  INFO: 'info'
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];
