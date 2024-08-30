import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import { AutoConnectProvider, ThemeProvider, WalletProvider } from '@/providers';
import { appRouter } from '@/Router';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AutoConnectProvider>
          <WalletProvider>
            <RouterProvider router={appRouter} />
            <Toaster />
          </WalletProvider>
        </AutoConnectProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
