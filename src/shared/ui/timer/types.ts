import { TwStyle } from 'twin.macro';

export interface ITimer {
  initialSeconds: number;
  resendOtp: () => void;
  variant?: string;
  customText?: string;
  twStyle?: TwStyle;
  children?: React.ReactNode;
  handele: () => void;
}
