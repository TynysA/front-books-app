import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { TwStyle } from 'twin.macro';

export interface ICreatableSelect<T> {
  options: Array<object>;
  control?: Control<T>;
  icon?: ReactNode;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | Array<object>;
  value?: string | Array<object>;
  isSearchable?: boolean;
  showErrorBorder?: boolean;
  rules?: object;
  twStyle?: TwStyle;
  useCustomComponent?: boolean;
  isHiddenLetter?: boolean;
  customOnChange?: (value: string) => void;
}
