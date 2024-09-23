import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Header } from '@/components/layout/Header';
import { PATH } from '@/constants';

const HomePage = lazy(() => import('@/pages/Home'));
const LendingPage = lazy(() => import('@/pages/Lending'));
const ExchangeBuyPage = lazy(() => import('@/pages/ExchangeBuy'));
const ExchangeSellPage = lazy(() => import('@/pages/ExchangeSell'));
const DownpaymentPage = lazy(() => import('@/pages/Downpayment'));
const AuctionPage = lazy(() => import('@/pages/Auction'));

const NullPage = lazy(() => import('@/pages/Null'));

const AppLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
      {
        path: PATH.LENDING,
        element: <LendingPage />,
      },
      {
        path: PATH.EXCHANGE.BUY,
        element: <ExchangeBuyPage />,
      },
      {
        path: PATH.EXCHANGE.SELL,
        element: <ExchangeSellPage />,
      },
      {
        path: PATH.DOWNPAYMENT_BUY,
        element: <DownpaymentPage />,
      },
      {
        path: PATH.AUCTION,
        element: <AuctionPage />,
      },
      {
        path: '*',
        element: <NullPage />,
      },
    ],
  },
]);
