import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import DashBoardPage from './pages/DashBoardPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/', // Root layout
    element: <AppLayout />,
  },
  {
    path: '/Zverse', // Landing page
    element: <LandingPage />,
  },
  {
    path: '/Zverse/Dashboard',
    element: <DashBoardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
