import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

// Pages
import {Home, Repository} from './containers/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/', 
        element: <Home />
      },
      {
        path: ':username/repos',
        element: < Repository />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)
