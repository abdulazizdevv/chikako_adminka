import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import Category from '../pages/Category/Category.tsx';
import Home from '../pages/Home/Home.tsx';
import Login from '../pages/Login/Login.tsx';
import { Error404 } from '../pages/Error404/Error404.tsx';
// import CreateCategory from '../pages/Category/Create/index.tsx';

export const routers = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      {
        index: true,
        path: '*',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'category',
        element: <Category />,
        // children: [
        //   {
        //     element: <CreateCategory />,
        //     path: 'create-category',
        //   },
        //   {
        //     element: <CreateCategory />,
        //     path: 'create-category/:id',
        //   },
        // ],
      },
      //   {
      //     path: 'singlepage',
      //     element: <SinglePage />,
      //   },
      {
        path: '/*',
        element: <Error404 />,
      },
    ],
  },
]);
