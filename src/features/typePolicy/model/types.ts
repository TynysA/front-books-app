import { ReactNode, RefObject } from 'react';

export interface IPolicyDataProps {
  title: string;
  placeholder: string;
  data: ICar[] | IDriver[];
  logIcon: ReactNode;
  handleRemove: (id: number) => void;
  handleAdd: (e) => void;
  closeButtonRef: RefObject<any>;
}
interface ICar {
  id: number;
  title: string;
  subTitle: string;
}

interface IDriver {
  id: number;
  title: string;
  canNotRemove: boolean;
}
