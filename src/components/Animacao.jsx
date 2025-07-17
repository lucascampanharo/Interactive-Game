export default function Animacao({ cena }) {
  let src = "personagem_padrao.png";

  switch (cena) {
    case "caverna":
      src = "personagem_caverna.png";
      break;
    case "olhar":
      src = "personagem_observando.png";
      break;
    case "agua":
      src = "personagem_bebendo.png";
      break;
  }

  return (
    <div className="animacao-container">
      <img
        src={`/assets/imagens/${src}`}
        alt="Personagem"
        className="animacao-img"
      />
    </div>
  );
}
