import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardProd } from "../repetitivos/Card";

export const Preview = () => {
  const produtos = useContext(ProdutoCtx);

  return (
    <section
      className="mx-5 flex gap-4 flex-col relative sm:mx-[100px]"
      id="Ofertas-do-mes"
    >
      <h1 className=" uppercase -tracking-tighter font-semibold sm:flex sm:justify-center sm:mb-5 sm:text-[24px]">
        Ofertas
      </h1>
      <div className="flex gap-4 sm:gap-10 overflow-hidden overflow-x-scroll sm:overflow-x-hidden sm:flex sm:justify-center  ">
        {produtos.slice(1, 11).map((produto: ProdutosInterface, i: number) => (
          <div
            className={` z-0 ${
              produto.PorcentagemDeDesconto <= 0 ? "hidden" : ""
            } flex flex-col gap-2 `}
            key={i}
          >
            <CardProd item={produto} i={i} slicePar1={1} slicePar2={11} />
          </div>
        ))}
      </div>
      <Link
        to={"/todas-as-nossas-ofertas"}
        className="flex justify-center underline text-muted-foreground hover:text-roxo"
      >
        Ver todos
      </Link>
    </section>
  );
};
