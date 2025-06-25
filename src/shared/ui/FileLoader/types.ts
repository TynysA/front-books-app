import { ChangeEvent, MouseEvent } from 'react';
import { TwStyle } from 'twin.macro';

export interface IFileLoader {
  pretext: string;
  docType: string;
  accept?: string;
  pretextStyle?: TwStyle;
  file: File | null;
  disabled?: boolean;
  uploadFunc: (e: ChangeEvent<HTMLInputElement>, docType: string) => void;
  removeFunc: (e: MouseEvent, docType: string) => void;
  previewFunc?: (e: MouseEvent<HTMLButtonElement>, file: File, docType: string) => void;
}
