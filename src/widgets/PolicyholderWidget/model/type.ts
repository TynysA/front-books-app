import { ReactNode, RefObject } from 'react';

export interface IPolicyholderWidgetProps {
  title: string;
  placeholder: string;
  data: ICar[] | IDriver[];
  logIcon: ReactNode;
  handleRemove: (id: any) => boolean;
  handleAdd: (e) => void;
  closeButtonRef: RefObject<any>;
  onChange?: (data) => void;
}
