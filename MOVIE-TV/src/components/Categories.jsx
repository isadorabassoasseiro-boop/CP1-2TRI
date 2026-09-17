
const Categories = ({ abaAtiva, onChange }) => {
    return (
        <div className="abas">
            <button
                className={abaAtiva === "curtidos" ? "ativa" : ""}
                onClick={() => onChange("curtidos")}
            >
                Curtidos
            </button>
            <button
                className={abaAtiva === "favoritos" ? "ativa" : ""}
                onClick={() => onChange("favoritos")}
            >
                Favoritos
            </button>
            <button
                className={abaAtiva === "assistindo" ? "ativa" : ""}
                onClick={() => onChange("assistindo")}
            >
                Assistindo
            </button>
        </div>
    );
};

export default Categories;