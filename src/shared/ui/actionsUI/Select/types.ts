import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { TwStyle } from 'twin.macro';

export interface ISelect<T> {
  options: Array<object>;
  control?: Control<T>;
  icon?: ReactNode;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | Array<object>;
  isSearchable?: boolean;
  rules?: object;
  twStyle?: TwStyle;
  useCustomComponent?: boolean;
  isMulti?: boolean;
  hasLabel?: boolean;
  showError?: boolean;
  showErrorBorder?: boolean;
  isHiddenLetter?: boolean;
  getOptionValue?: (value: string) => string;
  getOptionLabel?: (label: string) => string;
  customOnChange?: (value: string) => void;
}
