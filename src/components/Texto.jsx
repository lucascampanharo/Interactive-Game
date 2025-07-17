export default function Texto({ html }) {
  return <p dangerouslySetInnerHTML={{ __html: html }}></p>;
}
