export interface IButtonSheet {
  show: boolean;
  type: 'select' | 'info';
  options?: ISelectOptions[];
  text?: string;
  title?: string;
  onClose: () => void;
  onChange: (formData) => void;
  defaultValue?: string;
}

export interface ISelectButtonSheet {
  options?: ISelectOptions[];
  text?: string;
  title?: string;
  onClose: () => void;
  onChange?: (formData: ISelectOptions) => void;
  defaultValue?: string;
}

export interface ISelectOptions {
  label?: string;
  title?: string;
  name?: string;
  value?: string;
  subTitle?: string;
}
