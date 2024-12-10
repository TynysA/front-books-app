export interface IConfirmationModal {
  contentType: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  cancelText: string;
  acceptText: string;
  title?: string;
  subTitle?: string;
  colorOfAccept?: 'green' | 'red';
  handelAccept: () => void;
  setConfirmOpen?: () => void;
}
