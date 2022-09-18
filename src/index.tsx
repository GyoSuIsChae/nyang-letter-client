import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from '@styles/global-styles';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
