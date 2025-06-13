import { Control } from 'react-hook-form';
import { TwStyle } from 'twin.macro';

export interface ITextArea<T> {
  rows?: string;
  cols?: string;
  placeholder: string;
  id: string;
  name: string;
  control?: Control<T>;
  rules?: object;
  radioStyle?: TwStyle;
  showErrorBorder?: boolean;
  onChange?: (value: T) => void;
  twStyle?: TwStyle;
}
