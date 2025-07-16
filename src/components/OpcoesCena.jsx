export default function OpcoesCena({ opcoes, onEscolher }) {
  return (
    <div className="opcoes">
      {opcoes?.map((op, i) => (
        <button key={i} onClick={() => onEscolher(op)}>
          {op.texto}
        </button>
      ))}
    </div>
  );
}
