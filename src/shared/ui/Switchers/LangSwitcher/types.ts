export interface ILangSwitcher {
  type?: 'main';
}

export interface ISwitcher {
  i18n: { language: string };
  changeLocale: ChangeLocaleFn;
}

export type ChangeLocaleFn = (locale: string) => Promise<void>;
