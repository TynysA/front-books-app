import { Control } from 'react-hook-form';

export interface IRadio<T> {
  id: string;
  name: string;
  options: IRadioOption[];
  control?: Control<T>;
  rules?: object;
  disabled?: boolean;
}
interface IRadioOption {
  value: string;
  title: string;
  customElement: React.ReactElement;
}
