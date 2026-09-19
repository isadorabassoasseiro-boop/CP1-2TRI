import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import logoMovieTV from "../assets/logo-movietv.png";
import "./ListaPage.css";

const ListaPage = ({ filmes = [] }) => {

    const [busca, setBusca] = useState("");
    const [buscaAberta, setBuscaAberta] = useState(false);

    const filmesFiltrados = filmes.filter((filme) =>
        filme.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="lista-page">

            <div className="topo-lista">

                <div className="logo-lista">
                    <img src={logoMovieTV} alt="Logo MovieTV" />
                    <h1>MovieTV</h1>
                </div>

                <div className="acoes-lista">

                    {buscaAberta ? (
                        <input
                            type="text"
                            placeholder="Buscar filme"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            autoFocus
                            onBlur={() => setBuscaAberta(false)}
                        />
                    ) : (
                        <button
                            className="icone-busca"
                            onClick={() => setBuscaAberta(true)}
                        >
                            <FaSearch />
                        </button>
                    )}

                    <Link to="/catalogo" className="icone-lista">
                        <FaPlus />
                    </Link>

                </div>

            </div>

            <h2>Filmes assistidos</h2>

            <div className="grid-lista">

                {filmesFiltrados.map((filme) => (
                    <div className="card-lista" key={filme.id}>

                        <img
                            src={filme.imagem}
                            alt={filme.nome}
                        />

                        <h3>{filme.nome}</h3>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ListaPage