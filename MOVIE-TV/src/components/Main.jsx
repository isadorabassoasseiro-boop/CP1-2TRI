import { useState } from "react";
import { WiDirectionRight } from "react-icons/wi";
import { Link } from "react-router-dom";

const Main = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="main">

            <input
                type="text"
                id="usuario"
                placeholder="Usuário"
                onChange={(e) => setUsuario(e.target.value)}
            />

            <input
                type="password"
                id="senha"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
            />

            {usuario !== "" && senha !== "" ? (
                <Link to="/catalogo">
                    <button>
                        <WiDirectionRight className="WiDirectionRight" />
                    </button>
                </Link>
            ) : (
                <button onClick={() => alert("Preencha o usuário e a senha")}>
                    <WiDirectionRight className="WiDirectionRight" />
                </button>
            )}

        </div>
    )
}

export default Main
