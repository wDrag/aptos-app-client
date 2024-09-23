import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Header } from '@/components/layout/Header';
import { PATH } from '@/constants';

const HomePage = lazy(() => import('@/pages/Home'));
const LendingPage = lazy(() => import('@/pages/Lending'));
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
        path: '*',
        element: <NullPage />,
      },
    ],
  },
]);
