import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'

const router  = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element: <Home />
      
      },
      {
        path : 'about',
        element: <About />
      },
      {
        path : 'contact',
        element: <Contact />
      },
      {
        path : 'login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
