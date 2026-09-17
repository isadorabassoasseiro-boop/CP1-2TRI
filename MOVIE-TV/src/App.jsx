import { Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <div className="container">
        <h1>Bem-vindo ao <br></br>
          MovieTv</h1>
        <p>Entre na sua conta para ter acesso a sua lista filmes</p>

        <Link to="/login">
          <button><strong>Entrar</strong></button>
        </Link>

      </div>
    </>
  )
}

export default App
