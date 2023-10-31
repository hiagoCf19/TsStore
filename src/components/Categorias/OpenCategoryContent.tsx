import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext } from "react";
import { CardProd } from "../repetitivos/Card";

interface PropsCategory {
  props: string;
}
export const ContentCategory = ({ props }: PropsCategory) => {
  const produtos = useContext(ProdutoCtx);
  const conjuntos = produtos.filter((produto) => produto.category === props);

  return (
    <>
      <div
        className={`flex ${
          conjuntos.length % 2 === 0 ? "justify-center" : "pl-0"
        }  sm:flex-row w-full flex-wrap sm:gap-8 sm:mx-10 gap-2 z-0`}
      >
        {conjuntos.map((produto: ProdutosInterface, i: number) => (
          <CardProd item={produto} i={i} key={i} />
        ))}
      </div>
    </>
  );
};
