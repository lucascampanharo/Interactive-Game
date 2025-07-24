import { useState, useEffect } from "react";
import historia from "./data/historia.json";
import JogoSuperior from "./components/JogoSuperior";
import JogoInferior from "./components/JogoInferior";
import Menu from "./components/Menu";
import "./styles/jogo.css";

function App() {
  const [tela, setTela] = useState("menu"); // "menu" ou "jogo"
  const [cenaAtual, setCenaAtual] = useState("inicio");

  const cena = historia[cenaAtual];

  const avancarCena = (opcao) => {
    if (opcao.proximo) {
      setCenaAtual(opcao.proximo);
    }
  };

  // Aplica classe no <body> dependendo da tela atual
  useEffect(() => {
    document.body.className = tela === "menu" ? "menu-body" : "";
  }, [tela]);

  return (
    <div className="tela-jogo">
      {tela === "menu" ? (
        <Menu aoIniciar={() => setTela("jogo")} />
      ) : (
        <>
          <JogoSuperior cena={cena} avancarCena={avancarCena} />
          <JogoInferior cenaId={cenaAtual} />
        </>
      )}
    </div>
  );
}

export default App;
