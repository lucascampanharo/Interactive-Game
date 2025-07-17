export default function Opcoes({ opcoes, onEscolher }) {
  return (
    <div id="opcoes">
      {opcoes.map((opcao, i) => (
        <button key={i} onClick={() => onEscolher(opcao)}>
          {opcao.texto}
        </button>
      ))}
    </div>
  );
}
