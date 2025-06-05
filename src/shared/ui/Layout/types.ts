import { ReactNode } from 'react';

export interface ILayout {
  children: ReactNode;
  sidebarContent: {
    link: string;
    content: string;
    isChild?: boolean;
  }[];
  hiddenSidebarItems?: string[];
}
