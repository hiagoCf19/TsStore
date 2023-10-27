import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";

interface PropsCategory {
  props: string;
}
export const ContentCategory = ({ props }: PropsCategory) => {
  const produtos = useContext(ProdutoCtx);
  const conjuntos = produtos.filter((produto) => produto.category === props);
  console.log(conjuntos);
  return (
    <>
      {conjuntos.map((produto: ProdutosInterface, i: number) => (
        <React.Fragment key={i}>
          <h1>{produto.nome}</h1>
          <p>R$ {produto.price.toFixed(2).replace(".", ",")}</p>
        </React.Fragment>
      ))}
    </>
  );
};
