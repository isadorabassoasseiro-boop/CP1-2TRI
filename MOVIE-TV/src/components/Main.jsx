import { WiDirectionRight } from "react-icons/wi";


const Main = () => {
    return (
        <div className="main">

            <input type="text" id="usuario" placeholder="Usuário"/>
            <input type="password" id="senha" placeholder="Senha"/>

            <button><WiDirectionRight className="WiDirectionRight" /></button>
        </div>
    )

}

export default Main