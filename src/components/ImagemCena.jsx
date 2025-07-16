export default function ImagemCena({ src }) {
  return (
    <div className="imagem-cena">
      <img src={`/assets/images/${src}`} alt="Cena" />
    </div>
  );
}
