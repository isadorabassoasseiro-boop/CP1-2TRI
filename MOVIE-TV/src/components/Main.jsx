import { WiDirectionRight } from "react-icons/wi";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">

            <input type="text" id="usuario" placeholder="Usuário"/>
            <input type="password" id="senha" placeholder="Senha"/>

            <Link to="/lista">
                <button><WiDirectionRight className="WiDirectionRight" /></button>
            </Link>

        </div>
    )
}

export default Main