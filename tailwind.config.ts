import twAspectRatioPlugin from '@tailwindcss/aspect-ratio';
// @ts-ignore
import twScrollbarHidePlugin from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
// @ts-ignore
import twPseudoSelectorPlugin from 'tailwindcss-pseudo-selectors';
// @ts-ignore
import twTextShadowPlugin from 'tailwindcss-textshadow';
// TODO: add your configs here
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Noto Sans"', 'sans-serif']
    },
    extend: {}
  },
  plugins: [twAspectRatioPlugin, twPseudoSelectorPlugin, twScrollbarHidePlugin, twTextShadowPlugin]
} satisfies Config;
