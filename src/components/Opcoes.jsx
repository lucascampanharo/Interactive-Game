export default function Opcoes({ opcoes, onEscolher }) {
  return (
    <div id="opcoes" className="opcoes-container">
      {opcoes.map((opcao, i) => (
        <button
          key={i}
          className="botao-opcao"
          onClick={() => onEscolher(opcao)}
        >
          {opcao.texto}
        </button>
      ))}
    </div>
  );
}
