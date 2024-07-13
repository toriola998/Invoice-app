import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './routes/Home';
import { store } from './store/index';
import { Provider } from 'react-redux';
import Details from './routes/Details';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   {
      path: '/details/:id',
      element: <Details />,
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>,
);
