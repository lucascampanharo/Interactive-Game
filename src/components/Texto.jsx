export default function Texto({ html }) {
  return (
    <p className="texto-cena" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
