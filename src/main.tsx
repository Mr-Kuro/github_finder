import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Error } from './components/index.ts'
import { errorStyle } from './components/error/Error.tsx'

import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

// Pages
import {Home, Repository} from './containers/index'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div style={errorStyle}>
      <Error descriptions={[{mensagem: 'Página não encontrada!', status: 404}]} styled={true}/>
    </div>,
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
