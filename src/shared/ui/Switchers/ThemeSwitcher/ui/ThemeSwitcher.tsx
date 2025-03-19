import 'twin.macro';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@/config/theme/ThemeProvider.tsx';
import { IThemeSwitcher } from '@/shared/ui/Switchers/ThemeSwitcher/types.ts';

const ThemeSwitcher = ({ type = 'main' }: IThemeSwitcher) => {
  const { toggleTheme, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div tw='relative cursor-pointer' onClick={toggleTheme}>
      {t(theme)}
    </div>
  );
};

export default ThemeSwitcher;
