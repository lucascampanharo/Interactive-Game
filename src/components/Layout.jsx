export default function Layout({ children }) {
  return (
    <div className="layout">
      <h1>Jogo de Escolhas</h1>
      <div className="conteudo">{children}</div>
    </div>
  );
}
