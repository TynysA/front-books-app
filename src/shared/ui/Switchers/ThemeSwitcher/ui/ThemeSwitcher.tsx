import { useTheme } from '@/config/theme/ThemeProvider.tsx';
import { IThemeSwitcher } from '@/shared/ui/Switchers/ThemeSwitcher/types.ts';

const ThemeSwitcher = ({ type = 'main' }: IThemeSwitcher) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div tw='relative' onClick={toggleTheme}>
      {theme}
    </div>
  );
};

export default ThemeSwitcher;
