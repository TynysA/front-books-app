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
      backgroundImage: {
        'gradient-text': 'linear-gradient(103deg, #BDE0FF -2.91%, #1CD491 58.89%, #00FF45 106.95%)',
        'welcome-page': 'url("/assets/images/bg-welcome.jpg")',
        'welcome-dtp': 'linear-gradient(98deg, #FFF -4.2%, rgba(255, 255, 255, 0.00) 108.3%)',
        'dtp-title': 'linear-gradient(91deg, #F8FAFC 10.77%, rgba(248, 250, 252, 0.38) 98.97%)',
        'mobile-menu': 'linear-gradient(132deg, #2f4d3b -0.69%, #162522 103.63%)',
        'button-gradient':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(132deg, #8DD979 -0.7%, #2A5704 103.63%)',
        'button-green-gradient':
          'linear-gradient(132.28deg, #8DD979 -0.7%, #2A5704 103.63%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        banner:
          'linear-gradient(100deg, rgba(81, 81, 81, 0.82) 2.39%, rgba(54, 104, 12, 0.82) 103.84%), linear-gradient(0deg, rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0.44) 100%), url("/assets/images/main-banner.jpg")',
        'footer-bg': 'linear-gradient(132deg, #71c35a -0.7%, #254709 103.63%)',
        'my-applications-card-bg':
          'url("/assets/images/warning-sign.png"), linear-gradient(132deg, #71c35a -0.7%, #254709 103.63%)',
        'terms-male': 'url("/assets/images/terms-male.png")',
        'terms-male-mobile': 'url("/assets/images/terms-male-mobile.png")',
        'bg-map': 'url("/assets/images/bg-map.png")',
        'bg-blob': 'url("/assets/images/bg-blob.png")',
        'bg-car': 'url("/assets/images/bg-car.png")',
        'ph-overall': 'url("/assets/images/ph-overall.png")',
        'ph-object': 'url("/assets/images/ph-object.png")',
        'ph-mileage': 'url("/assets/images/ph-mileage.png")',
        'ph-vincode': 'url("/assets/images/ph-vincode.jpg")',
        check: 'url("/assets/images/check.svg")',
        'custom-top-gradient': 'linear-gradient(70.36deg, #4B3EEF 0%, #2DBBD2 100%)'
      },
      transitionProperty: {
        dropdown: 'transform, visibility, max-height'
      },
      backgroundColor: {
        tertiary: 'rgba(238, 238, 238, 0.94)',
        checkbox: '#4F9D3A',
        'orange-ffins': '#F9B000',
        input: '#00000033',
        root: `var(--bg-root)`,
        primary: `var(--bg-primary)`,
        secondary: `var(--bg-secondary)`,
        thirdly: `var(--bg-thirdly)`,
        fourthly: `var(--bg-fourthly)`,
        block: `var(--bg-block)`,
        lightGreen: `var(--bg-green)`
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
      borderColor: {
        checkbox: '#4F9D3A',
        'orange-ffins': '#F9B000',
        secondary: `var(--bg-secondary)`
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
      flex: {
        half: '0 0 48%',
        'benefit-block-mobile': '0 0 225px'
      },
      flexGrow: {
        ...defaultTheme.flexGrow,
        0: 0
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
