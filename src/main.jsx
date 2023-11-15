import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Competence from './pages/Competence'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PorteFolio from './pages/PorteFolio'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />

  },
  {
    path:'/competences',
    element:<Competence />

  },
  {
    path:'/contact',
    element:<Contact />

  },
  {
    path:'/portefolio',
    element:<PorteFolio/>

  },
  {
    path:'*',
    element:<NotFound/>

  },

]) 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
