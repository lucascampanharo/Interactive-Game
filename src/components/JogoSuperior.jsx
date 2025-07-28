import "../styles/jogosuperior.css";
import Texto from "./Texto";
import Opcoes from "./Opcoes";

export default function JogoSuperior({ cena, avancarCena }) {
  return (
    <div className="jogo-superior">
      <h1 className="titulo-jogo">Na Floresta Obscura</h1>
      <Texto html={cena.texto} />
      <Opcoes opcoes={cena.opcoes} onEscolher={avancarCena} />
    </div>
  );
}
