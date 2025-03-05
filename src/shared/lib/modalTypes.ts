export const MODAL_TYPES = {
  OPEN_TEST: 'open_test',
  ADD_TEST: 'add_test',
  FORM: 'form',
  INFO: 'info'
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];
