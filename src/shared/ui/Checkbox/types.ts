import { Control } from 'react-hook-form';
import { TwStyle } from 'twin.macro';

export interface ICheckbox<T> {
  twStyle?: TwStyle;
  label?: Element | string;
  variant?: 'default' | 'small';
  hasWord?: boolean;
  showError?: boolean;
  showErrorBlock?: boolean;
  name: string;
  control?: Control<T>;
  rules?: object;
  isWhite?: boolean;
  disabled?: boolean;
}
