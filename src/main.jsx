import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './routes/Home';
import { Provider } from 'react-redux';
import Details from './routes/Details';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
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
         <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
         </PersistGate>
      </Provider>
   </React.StrictMode>,
);
