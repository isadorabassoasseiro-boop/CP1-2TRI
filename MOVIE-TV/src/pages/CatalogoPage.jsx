
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaListUl } from "react-icons/fa";
import logoMovieTV from "../assets/logo-movietv.png";
import "./CatalogoPage.css";

const CatalogoPage = ({ onAdicionar }) => {
    const [filmes, setFilmes] = useState([]);
    const [busca, setBusca] = useState("");
    const [buscaAberta, setBuscaAberta] = useState(false);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=38ee6cafdd4e0ad65c7bbda750cb81a9&language=pt-BR")
            .then((resposta) => resposta.json())
            .then((dados) => setFilmes((dados.results || []).slice(0, 9)))
            .catch((erro) => console.log("Erro ao buscar filmes:", erro));
    }, []);

    const filmesFiltrados = filmes.filter((filme) =>
        filme.title.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="catalogo">
            <div className="topo">
                <div className="logo">
                    <img src={logoMovieTV} alt="Logo MovieTV" />
                    <h1>MovieTV</h1>
                </div>

                <div className="acoes-topo">
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
                        <button className="icone-busca" onClick={() => setBuscaAberta(true)}>
                            <FaSearch />
                        </button>
                    )}

                    <Link to="/lista" className="icone-lista">
                        <FaListUl />
                    </Link>
                </div>
            </div>

            <p>Escolha qual filme você quer adicionar na sua lista</p>

            <div className="grid-filmes">
                {filmesFiltrados.map((filme) => (
                    <div key={filme.id} className="card-filme">
                        <img
                            src={`https://image.tmdb.org/t/p/w780${filme.backdrop_path}`}
                            alt={filme.title}
                        />
                        <h3>{filme.title}</h3>
                        <button
                            onClick={() =>
                                onAdicionar({
                                    id: filme.id,
                                    nome: filme.title,
                                    imagem: `https://image.tmdb.org/t/p/w780${filme.backdrop_path}`,
                                })
                            }
                        >
                            +
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogoPage;