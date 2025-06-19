export interface IAddBook {
  authors?:
    | {
        value: string;
        label: string;
      }[]
    | undefined;
  title: string;
  description: string;
}
