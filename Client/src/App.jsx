import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;