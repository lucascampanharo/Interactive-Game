import Animacao from "./Animacao";

export default function JogoInferior({ cenaId }) {
  return (
    <div className="jogo-inferior">
      <Animacao cena={cenaId} />
    </div>
  );
}
