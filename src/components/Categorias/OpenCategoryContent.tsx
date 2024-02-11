import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext } from "react";
import { CardProd } from "../styledElements/Card";

interface PropsCategory {
  props: string;
  animation: boolean;
}
export const ContentCategory = ({ props, animation }: PropsCategory) => {
  const produtos = useContext(ProdutoCtx);
  {
    /* ESSE FILTRO SERVE PARA EXIBIR APENAS OS ITEMS QUE CORRESPONDEREM A ROTA EM QUE O USUARIO ESTÁ, SE A ROTA É IGUAL A FEMININO SÓ SERÃO EXIBIDOS FEMININOS, AQUI O PROPS REPRESENTA O ALL CATEGORY, DO COMPONENTE ALLCATEGORYS */
  }
  const conjuntos = produtos.filter((produto) => produto.category === props);

  return (
    <>
      <div
        className={` grid grid-cols-2 sm:grid-cols-7 w-full z-0 ${animation ? "animate__animated animate__fadeIn" : ""
          } `}
      >
        {conjuntos.map((produto: ProdutosInterface, i: number) => (
          <CardProd item={produto} i={i} key={i} />

        ))}
      </div>
    </>
  );
};
