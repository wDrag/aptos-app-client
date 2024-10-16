import NiceModal from '@ebay/nice-modal-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import { AutoConnectProvider, ThemeProvider, WalletProvider } from '@/providers';
import { appRouter } from '@/Router';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: 15 * 1000, retry: 0 },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AutoConnectProvider>
          <WalletProvider>
            <NiceModal.Provider>
              <RouterProvider router={appRouter} />
              <Toaster />
              <Analytics />
            </NiceModal.Provider>
          </WalletProvider>
        </AutoConnectProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
