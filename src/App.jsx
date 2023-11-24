
import './index.css'
import {
  Navbar,
  Login,
  Register,
  Basket,
  Landing,
  Error,
  Halal,
} from './pages';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'basket',
        element: <Basket />
      },
      {
        path: 'halal',
        element: <Halal />
      },
    ],
    
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
