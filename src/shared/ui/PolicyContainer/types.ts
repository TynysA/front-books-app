import { ReactNode } from 'react';

export interface IPolicyContainer {
  children: ReactNode;
  showArrow?: boolean;
  showBurgerMenu?: boolean;
  title: string;
  goBackCustomHandler?: () => void;
}
