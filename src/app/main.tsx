import '@/app/i18n/config';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@/app/styles';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={<div>Error!</div>}
        onReset={() => {
          console.error('Reset Error');
        }}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
