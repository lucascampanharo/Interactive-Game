export default function Animacao({ cena }) {
  const animacoes = {
    caverna: "personagem_caverna.png",
    olhar: "personagem_observando.png",
    agua: "personagem_bebendo.png",
  };

  const src = animacoes[cena] || "personagem_padrao.png";

  return (
    <div className="animacao-container">
      <img
        src={`/assets/imagens/${src}`}
        alt="Personagem animado"
        className="animacao-img"
      />
    </div>
  );
}
