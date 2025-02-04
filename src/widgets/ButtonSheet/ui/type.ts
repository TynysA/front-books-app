export interface IButtonSheet {
  show: boolean;
  type: 'select' | 'info';
  options?: ISelectOptions[];
  text?: string;
  title?: string;
  onClose: () => void;
  onChange: (formData) => void;
  defaultValue?: string;
  subText?: string;
  list?: string[];
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

export interface IInfoButtonSheet {
  text?: string;
  title?: string;
  subText?: string;
  list?: string[];
  onClose: () => void;
}
