import twAspectRatioPlugin from '@tailwindcss/aspect-ratio';
// @ts-ignore
import twScrollbarHidePlugin from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
// @ts-ignore
import twPseudoSelectorPlugin from 'tailwindcss-pseudo-selectors';
// @ts-ignore
import twTextShadowPlugin from 'tailwindcss-textshadow';
// TODO: add your config here
export default {
  content: [
    `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/pageWrappers/**/*.{js,ts,jsx,tsx,mdx}`
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Noto Sans"', 'sans-serif']
    },
    extend: {
      borderColor: {
        checkbox: '#4F9D3A',
        'orange-border': '#F9B000'
      },

      backgroundColor: {
        tertiary: 'rgba(238, 238, 238, 0.94)',
        checkbox: '#4F9D3A',
        'orange-border': '#F9B000',
        input: '#00000033',
        root: `var(--bg-root)`,
        primary: `var(--bg-primary)`,
        secondary: `var(--bg-secondary)`,
        thirdly: `var(--bg-thirdly)`,
        fourthly: `var(--bg-fourthly)`,
        block: `var(--bg-block)`,
        lightGreen: `var(--bg-green)`,
        darkGreen: `var(--bg-dark-green)`,
        modal: `var(--bg-modal)`
      },
      textColor: {
        ...defaultTheme.textColor,
        primary: `var(--font-primary)`,
        opposite: `var(--font-primary-opposite)`,
        secondary: `var(--font-secondary)`,
        'secondary-opposite': `var(--font-secondary-opposite)`,
        gray: `var(--font-gray)`
      },
      textShadow: {
        black: '4px 4px 27px rgba(0, 0, 0, 0.25)'
      },
      boxShadow: {
        'hovered-btn': '0 5px 5px 5px rgba(194, 197, 199, 0.2)',
        'nav-menu': '0px 30px 21.1px -24px #0000004D;',
        checkbox: '0px 2.693880796432495px 2.693880796432495px 0px #00000040',
        file: '0px 0px 40px 0px rgba(0, 0, 0, 0.05), -20px 20px 40px 0px rgba(0, 0, 0, 0.10)',
        btn: '0px 30px 21.1px -24px #0000004D'
      },
      zIndex: {
        ...defaultTheme.zIndex
      },
      screens: {
        'desktop-lg': { max: '1919px' },
        'desktop-sm': { max: '1439px' },
        laptop: { max: '1279px' },
        tablet: { max: '1023px' },
        'mobile-lg': { max: '767px' },
        'mobile-md': { max: '500px' },
        'mobile-sm': { max: '374px' },
        'mobile-xsm': { max: '280px' }
      }
    }
  },
  plugins: [twAspectRatioPlugin, twPseudoSelectorPlugin, twScrollbarHidePlugin, twTextShadowPlugin]
} satisfies Config;
