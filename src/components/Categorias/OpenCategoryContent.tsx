import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardSty } from "../Novidades/Populares";
import MudaCorCtx from "@/Context/StateColorContext";

interface PropsCategory {
  props: string;
}
export const ContentCategory = ({ props }: PropsCategory) => {
  const { setMudaCor }: any = useContext(MudaCorCtx);
  const produtos = useContext(ProdutoCtx);
  const conjuntos = produtos.filter((produto) => produto.category === props);
  const produtosComDesconto = conjuntos.filter((produto) => {
    return produto.hasOwnProperty("PorcentagemDeDesconto");
  });
  const precoFinal = produtosComDesconto.map((produto) => {
    if (produto.PorcentagemDeDesconto !== undefined) {
      const desconto = (produto.price * produto.PorcentagemDeDesconto) / 100;
      const precoComDesconto = produto.price - desconto;
      return precoComDesconto;
    } else {
      return;
    }
  });

  return (
    <>
      <div
        className={`flex ${
          conjuntos.length % 2 === 0 ? "justify-center" : "pl-5"
        }  sm:flex-row w-full flex-wrap sm:gap-8 sm:mx-10 gap-2 z-0`}
      >
        {conjuntos.map((produto: ProdutosInterface, i: number) => (
          <React.Fragment key={i}>
            <Link
              to={`/${produto.nome.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setMudaCor("Not")}
            >
              <CardSty>
                <div className="blob"></div>
                <div className="bg">
                  <img
                    src={produto.image}
                    alt="card"
                    className="h-[200px] w-full rounded-t-[6px]
              "
                  />
                  <div className="flex flex-col gap-2 px-2 py-2 ">
                    <div className="flex gap-1 produtos-center">
                      <p className="text-sm font-bold text-white">
                        <i className="text-[12px]"> R$</i>
                        {precoFinal[i]?.toFixed(2).replace(".", ",")}
                      </p>
                      <p className=" text-[10px]  truncate line-through text-[#a7a7a7b1] flex items-center ">
                        <i className="text-[10px]">R$</i>
                        {produto.price.toFixed(2).replace(".", ",")}
                      </p>
                      <div className=" w-8 h-4 border border-solid border-roxo rounded-md flex justify-center items-center produtos-center text-roxo">
                        <span className="text-[10px]">
                          -{produto.PorcentagemDeDesconto}%{" "}
                        </span>
                      </div>
                    </div>

                    <span className=" font-normal text-base leading-6 text-[#a7a7a7] truncate   ">
                      {produto.nome}
                    </span>
                  </div>
                </div>
              </CardSty>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
