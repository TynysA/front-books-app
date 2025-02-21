import { ReactNode } from 'react';
import { TwStyle } from 'twin.macro';

export interface IContainer {
  children: ReactNode;
  twStyles?: TwStyle;
}
