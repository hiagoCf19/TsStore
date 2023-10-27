import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";

interface PropsCategory {
  props: string;
}
export const ContentCategory = ({ props }: PropsCategory) => {
  const produtos = useContext(ProdutoCtx);
  const conjuntos = produtos.filter((produto) => produto.category === props);
  const produtosComDesconto = conjuntos.filter((item) => {
    return item.hasOwnProperty("PorcentagemDeDesconto");
  });
  const precoFinal = produtosComDesconto.map((item) => {
    if (item.PorcentagemDeDesconto !== undefined) {
      const desconto = (item.price * item.PorcentagemDeDesconto) / 100;
      const precoComDesconto = item.price - desconto;
      return precoComDesconto;
    } else {
      return;
    }
  });
  console.log(conjuntos);
  return (
    <>
      {conjuntos.map((produto: ProdutosInterface, i: number) => (
        <React.Fragment key={i}>
          <div>
            <div>
              <h1>{produto.nome}:</h1>
            </div>

            <p>R$ {produto.price.toFixed(2).replace(".", ",")}</p>
            <p className="text-[17px] font-semibold">
              Com {produto.PorcentagemDeDesconto}% desconto: R${" "}
              {precoFinal[i]?.toFixed(2).replace(".", ",")}{" "}
            </p>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
