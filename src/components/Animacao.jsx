import "../styles/animacao.css";

export default function Animacao({ cena }) {
  return (
    <div className="animacao-container">
      {cena === "ataque" ? (
        <div className="sprite-animacao ataque" />
      ) : (
        <img
          src={`/assets/images/cavaleiro/Hero-idle.gif`}
          alt="Personagem padrão"
          className="animacao-img"
        />
      )}
    </div>
  );
}
