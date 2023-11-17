import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";

import { TitleGeneric } from "../styledElements/title";
import { CardProd } from "../styledElements/Card";
import { Link } from "react-router-dom";

export const Bombando: React.FC = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);

  return (
    <section
      className="sm:mx-5 flex gap-4 flex-col relative justify-center sm:w-[82%]"
      id="produtos-do-momento"
    >
      <div className="mx-5">
        <TitleGeneric title="Mais populares" />
      </div>

      <div className="flex flex-col  gap-8 overflow-hidden  ">
        <div className=" flex justify-center sm:justify-normal sm:flex-row w-full flex-wrap sm:gap-2  gap-2 z-0 sm:flex-nowrap">
          {produtos
            .slice(1, 10)
            .sort(() => Math.random() - 0.5)
            .map((item: ProdutosInterface, i: number) => (
              <CardProd
                i={i}
                key={i}
                item={item}
                slicePar1={1}
                slicePar2={10}
              />
            ))}
        </div>
        <Link
          to={"/todos-os-populares-do-momento"}
          className="flex justify-center underline text-muted-foreground hover:text-roxo"
        >
          Ver todos
        </Link>
      </div>
    </section>
  );
};
