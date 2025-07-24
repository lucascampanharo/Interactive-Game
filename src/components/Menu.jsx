import "../styles/menu.css";

export default function Menu({ aoIniciar }) {
  const titulo = "Aventura Interativa";

  return (
    <div className="menu-container">
      <h1 className="titulo-jogo">
        {titulo.split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra === " " ? "\u00A0" : letra}
          </span>
        ))}
      </h1>

      <button className="botao" onClick={aoIniciar}>
        Iniciar do Jogo
      </button>
      <button className="botao" onClick={aoIniciar}>
        Opções
      </button>
      <button className="botao" onClick={aoIniciar}>
        Sair do Jogo
      </button>
    </div>
  );
}
