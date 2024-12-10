import { TwStyle } from 'twin.macro';

export interface IFileLoader {
  pretext: string;
  docType: string;
  pretextStyle?: TwStyle;
  file: File | null;
  disabled?: boolean;
  uploadFunc: (side: string) => void;
  removeFunc: (doc: string) => void;
  previewFunc: (doc: string) => void;
}
