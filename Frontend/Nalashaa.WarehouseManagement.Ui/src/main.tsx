import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout';
import { TransferOrders } from './pages/TransferOrders';
import { NewTransferOrder } from './pages/NewTransferOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/transfers" replace />
      },
      {
        path: 'transfers',
        element: <TransferOrders />
      },
      {
        path: 'transfers/new',
        element: <NewTransferOrder />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
