import { ReactNode, RefObject } from 'react';

export interface IPolicyholderWidgetProps {
  title: string;
  placeholder: string;
  data: unknown[];
  logIcon: ReactNode;
  handleRemove: (id: any, onConfirm: () => void) => void;
  handleAdd: (e) => void;
  closeButtonRef: RefObject<any>;
  onChange?: (data) => void;
}
