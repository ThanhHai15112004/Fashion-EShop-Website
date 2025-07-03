import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/index';
import Products from '../pages/Products/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
       { index: true, element: <HomePage /> },
       { path: 'products', element: <Products /> }
    ],
  },
]);

export { router };
