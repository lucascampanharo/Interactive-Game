import { useState } from "react";
import historia from "./data/historia.json";
import JogoSuperior from "./components/JogoSuperior";
import JogoInferior from "./components/JogoInferior";
import "./styles/index.css";

function App() {
  const [cenaAtual, setCenaAtual] = useState("inicio");

  const cena = historia[cenaAtual];

  const avancarCena = (opcao) => {
    if (opcao.proximo) {
      setCenaAtual(opcao.proximo);
    }
  };

  return (
    <div className="tela-jogo">
      <JogoSuperior cena={cena} avancarCena={avancarCena} />
      <JogoInferior cenaId={cenaAtual} />
    </div>
  );
}

export default App;
