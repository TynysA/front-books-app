import '@/app/styles/font.css';

import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);
//TODO: change this if needed
const customStyles = css`
  html {
    height: 100%;
  }
  body {
    ${tw`antialiased transition-all duration-200`};
    min-height: 100%;
    color: rgba(255, 255, 255, 0.7);
    background-color: #f7f7f7;
  }
  #root {
    height: 100%;
  }
  svg.ours {
    fill: currentColor;
  }

  * {
    font-family: 'SF Pro Display', sans-serif;
  }

  .swiper-button-disabled svg {
    cursor: not-allowed;
    fill: rgba(255, 255, 255, 0.06) !important;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .swiper-button-disabled svg path {
    cursor: not-allowed;
    fill: rgba(255, 255, 255, 0.1) !important;
  }

  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator,
  input[type='time']::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }

  .text-underline {
    text-decoration: underline;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #4f9d3a;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4f9d3a;
    border-radius: 16px;
    border: 3px solid #4f9d3a;
  }
  -webkit-tap-highlight-color: transparent;
  :root {
    scrollbar-color: #4f9d3a;
    scrollbar-width: thin;
  }
  ::-webkit-input-placeholder,
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder,
  ::placeholder {
    text-transform: none;
  }
`;
