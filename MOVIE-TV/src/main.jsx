import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ListaPage from './pages/ListaPage.jsx'
import CatalogoPage from './pages/CatalogoPage.jsx'

const filmesAdicionados = []

const adicionarFilme = (filme) => {
  filmesAdicionados.push(filme)
}

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/login", element:<LoginPage/>},
  {
    path:"/catalogo",
    element:<CatalogoPage onAdicionar={adicionarFilme}/>
  },
  {
    path:"/lista",
    element:<ListaPage filmes={filmesAdicionados}/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)