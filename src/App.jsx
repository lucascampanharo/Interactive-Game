import { useState, useEffect } from "react";
import historia from "./data/historia.json";
import JogoSuperior from "./components/JogoSuperior";
import JogoInferior from "./components/JogoInferior";
import Menu from "./components/Menu";
import "./styles/jogo.css";

function App() {
  const [tela, setTela] = useState("menu"); // "menu", "jogo", "opcoes"

  const [cenaAtual, setCenaAtual] = useState("inicio");
  const cena = historia[cenaAtual];

  const iniciarJogo = () => setTela("jogo");
  const abrirOpcoes = () => setTela("opcoes");
  const sairDoJogo = () => {
    const confirmar = window.confirm("Tem certeza que deseja sair?");
    if (confirmar) {
      // Simula "fechar" o jogo (você pode personalizar isso)
      window.close?.(); // Funciona apenas em alguns casos
      alert("Jogo encerrado.");
    }
  };

  const avancarCena = (opcao) => {
    if (opcao.proximo) {
      setCenaAtual(opcao.proximo);
    }
  };

  // Altera a classe do body de acordo com a tela
  useEffect(() => {
    document.body.className = tela === "menu" ? "menu-body" : "";
  }, [tela]);

  return (
    <div className="tela-jogo">
      {tela === "menu" && (
        <Menu
          aoIniciar={iniciarJogo}
          Settings={abrirOpcoes}
          Sair={sairDoJogo}
        />
      )}

      {tela === "jogo" && (
        <>
          <JogoSuperior cena={cena} avancarCena={avancarCena} />
          <JogoInferior cenaId={cenaAtual} />
        </>
      )}

      {tela === "opcoes" && (
        <div className="tela-opcoes">
          <h2>⚙️ Opções</h2>
          <p>Aqui você pode colocar configurações como volume, idioma, etc.</p>
          <button className="botao" onClick={() => setTela("menu")}>
            Voltar ao Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
