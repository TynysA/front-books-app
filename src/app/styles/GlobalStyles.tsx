import '@/app/styles/font.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { css, Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

const customStyles = css`
  #root {
    height: 100%;
  }
`;
