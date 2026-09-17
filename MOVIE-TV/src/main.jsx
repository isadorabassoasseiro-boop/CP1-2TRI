import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ListaPage from './pages/ListaPage.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/login", element:<LoginPage/>},
  {path:"/lista", element:<ListaPage/>}
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
