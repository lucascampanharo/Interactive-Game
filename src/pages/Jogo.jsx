import { useJogo } from "../hooks/useJogo";
import ImagemCena from "../components/ImagemCena";
import TextoCena from "../components/TextoCena";
import OpcoesCena from "../components/OpcoesCena";
import Layout from "../components/Layout";

export default function Jogo() {
  const { cena, imagem, avancar } = useJogo();

  return (
    <Layout>
      <ImagemCena src={imagem} />
      <TextoCena texto={cena.texto} />
      <OpcoesCena opcoes={cena.opcoes} onEscolher={avancar} />
    </Layout>
  );
}
