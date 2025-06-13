import '@/app/styles/font.css';
import '@/config/theme/globals.css';

import { Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global />
  </>
);
