import '@/app/i18n/config';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/app/store';
import { GlobalStyles } from '@/app/styles';
import { ThemeProvider } from '@/config/theme/ThemeProvider.tsx';
import { FullScreenError } from '@/widgets/FullScreenError';

import App from './App';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ErrorBoundary
            FallbackComponent={FullScreenError}
            onReset={() => {
              console.error('Reset Error');
            }}
          >
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
