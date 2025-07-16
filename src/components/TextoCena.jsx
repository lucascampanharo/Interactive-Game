export default function TextoCena({ texto }) {
  return <div className="texto" dangerouslySetInnerHTML={{ __html: texto }} />;
}
