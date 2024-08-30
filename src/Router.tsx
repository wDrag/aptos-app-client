import { Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/components/home';

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
