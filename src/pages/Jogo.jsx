import { useJogo } from "../hooks/useJogo";
import ImagemCena from "../components/ImagemCena";
import TextoCena from "../components/Texto";
import OpcoesCena from "../components/Opcoes";
import Animacao from "../components/Personagem";
import Layout from "../components/Layout";

export default function Jogo() {
  const { cena, imagem, avancar } = useJogo();

  return (
    <Layout>
      <div className="jogo-principal">
        <ImagemCena src={imagem} />
        <TextoCena texto={cena.texto} />
        <OpcoesCena opcoes={cena.opcoes} onEscolher={avancar} />
      </div>

      <Animacao cena={imagem.replace(".png", "")} />
    </Layout>
  );
}
