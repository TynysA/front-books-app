export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface ILoginForm {
  onFinish: (data: ILoginFormValues) => void;
}
