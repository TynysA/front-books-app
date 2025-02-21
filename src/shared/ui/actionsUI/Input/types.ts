import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { TwStyle } from 'twin.macro';

export interface IButtonVariants {
  outlined: TwStyle;
  borderLabel: TwStyle;
  filledLabelInside: TwStyle;
  underline: TwStyle;
  filledLabelOutside: TwStyle;
}

export interface IInput {
  id: string;
  name: string;
  control?: Control<T>;
  rules?: object;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  variant?: keyof IButtonVariants;
  children: ReactNode;
  onClick?: (e) => void;
  loading?: boolean;
  twStyle?: TwStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label: string;
}
