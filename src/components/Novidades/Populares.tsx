import MudaCorCtx from "@/Context/StateColorContext";
import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TitleGeneric } from "../UiVerse/title";
export const CardSty = styled.div`
  position: relative;
  width: 180px;
  height: 300px;
  border-radius: 8px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #1b1b1b, -20px -20px 60px #1b1b1b;

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 170px;
    height: 290px;
    z-index: 2;
    background: rgba(25, 25, 25, 0.99);
    backdrop-filter: blur(24px);
    border-radius: 8px;
    overflow: hidden;
    outline: 2px solid #1b1b1b;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 250px;
    border-radius: 50%;
    background-color: #725cff;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export const Bombando: React.FC = () => {
  const { setMudaCor }: any = useContext(MudaCorCtx);

  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  const produtosComDesconto = produtos.filter((item) => {
    return item.hasOwnProperty("PorcentagemDeDesconto");
  });
  const precoFinal: any = produtosComDesconto.map((item) => {
    if (item.PorcentagemDeDesconto !== undefined) {
      const desconto = (item.price * item.PorcentagemDeDesconto) / 100;
      const precoComDesconto = item.price - desconto;
      return precoComDesconto;
    } else {
      return;
    }
  });

  return (
    <section
      className=" sm:mx-[90px] flex flex-col gap-4 mt-[-25px]"
      id="produtos-do-momento"
    >
      <div className="mx-5">
        <TitleGeneric title="Mais populares" />
      </div>

      <div className="flex flex-col  gap-8">
        <div className=" flex justify-center  sm:flex-row w-full flex-wrap sm:gap-8 sm:mx-10 gap-2 z-0">
          {produtos.map((item: ProdutosInterface, i: number) => (
            <React.Fragment>
              {item.image === "" ? (
                ""
              ) : (
                <Link
                  to={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setMudaCor(item.primeiraCor)}
                  key={i}
                >
                  <CardSty>
                    <div className="blob"></div>
                    <div className="bg">
                      <img
                        src={item.image}
                        alt="card"
                        className="h-[200px] w-full rounded-t-[6px]
              "
                      />
                      <div className="flex flex-col gap-2 px-2 py-2 ">
                        <div className="flex gap-1 items-center">
                          <p className="text-sm font-bold text-white">
                            <i className="text-[12px]"> R$</i>
                            {precoFinal[i].toFixed(2).replace(".", ",")}
                          </p>
                          <p
                            className={` text-[10px]  truncate line-through text-[#a7a7a7b1] flex  ${
                              item.PorcentagemDeDesconto <= 0 ? "hidden" : ""
                            }`}
                          >
                            <i className="text-[10px]">R$</i>
                            {item.price.toFixed(2).replace(".", ",")}
                          </p>
                          <div
                            className={` w-8 h-4 border border-solid border-roxo rounded-md flex justify-center items-center text-roxo  ${
                              item.PorcentagemDeDesconto <= 0 ? "hidden" : ""
                            }`}
                          >
                            <span className="text-[10px]">
                              -{item.PorcentagemDeDesconto}%{" "}
                            </span>
                          </div>
                        </div>

                        <span className=" font-normal text-base leading-6 text-[#a7a7a7] truncate   ">
                          {item.nome}
                        </span>
                      </div>
                    </div>
                  </CardSty>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
