import { ReactNode } from 'react';
import { TwStyle } from 'twin.macro';

export interface IButtonVariants {
  primary: TwStyle;
  colorBg: TwStyle;
  transparent: TwStyle;
  material: TwStyle;
  table_control: TwStyle;
  flat: TwStyle;
  panel: TwStyle;
  secondary: TwStyle;
  grey: TwStyle;
  icon?: TwStyle;
}

export interface IButton {
  isLoading?: boolean;
  variant?: keyof IButtonVariants;
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  twStyle?: TwStyle;
}

export interface ILinkButton {
  icon?: ReactNode;
  text: ReactNode;
}

export interface IIconButton {
  icon: ReactNode;
}

export interface IBtnStyles {
  variant: keyof IButtonVariants;
  isLoading?: boolean;
  twStyle?: TwStyle;
}
