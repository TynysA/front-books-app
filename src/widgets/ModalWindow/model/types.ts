export interface ModalProps {
  handleClose?: () => void;
  modalContent?: string;
  handleFunction: (params: any) => void;
}
