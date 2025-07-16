import { useState } from "react";
import historia from "../data/historia.json";

export function useJogo() {
  const [cenaAtual, setCenaAtual] = useState("inicio");

  function avancar(opcao) {
    if (opcao.proximo) {
      setCenaAtual(opcao.proximo);
    } else if (opcao.acao === "atacar") {
      const d12 = Math.ceil(Math.random() * 12);
      alert(`Você atacou com força ${d12}!`);
    }
  }

  return {
    cena: historia[cenaAtual],
    imagem: historia[cenaAtual].imagem || "default.png",
    avancar,
  };
}
