import { useEffect, useState } from "react";
import "../styles/menu.css";

export default function Menu({ aoIniciar }) {
  const titulo = "Aventura Interativa";
  const [mostrarBotoes, setMostrarBotoes] = useState(false);

  useEffect(() => {
    const tempoTotalAnimacao = 2400; // 2.4 segundos (ms)
    const timeout = setTimeout(() => {
      setMostrarBotoes(true);
    }, tempoTotalAnimacao);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="menu-container">
      <h1 className="titulo-jogo">
        {titulo.split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra === " " ? "\u00A0" : letra}
          </span>
        ))}
      </h1>

      <div>
        <button
          className={`botao ${mostrarBotoes ? "mostrar" : ""}`}
          onClick={aoIniciar}
        >
          Iniciar
        </button>
        <button
          className={`botao ${mostrarBotoes ? "mostrar" : ""}`}
          onClick={aoIniciar}
        >
          Opções
        </button>
        <button
          className={`botao ${mostrarBotoes ? "mostrar" : ""}`}
          onClick={aoIniciar}
        >
          Sair do Jogo
        </button>
      </div>
    </div>
  );
}
