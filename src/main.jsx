import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import routes from './Routes/Routex';
import FireAuthProvider from './Providers/FireAuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FireAuthProvider>
      <RouterProvider router={routes} />
    </FireAuthProvider>
  </React.StrictMode>,
)
