import "../styles/menu.css";

export default function Menu({ aoIniciar }) {
  return (
    <div className="menu-container">
      <h1 className="titulo-jogo">Aventura Interativa</h1>
      <button className="botao-iniciar" onClick={aoIniciar}>
        Iniciar Jogo
      </button>
    </div>
  );
}
