import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { Home } from './pages/index';
import { Product } from './pages/product';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product',
      element: <Product />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
