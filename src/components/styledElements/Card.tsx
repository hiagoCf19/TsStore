import MudaCorCtx from "@/Context/VariacaoContext";
import { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardSty = styled.div`
  position: relative;
  width: 100%;
  height: 17.5rem;
  border-radius: 8px;
  z-index: 49;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 95%;
    height: 16.87rem;
    z-index: 2;
    background: #030114;
    backdrop-filter: blur(24px);
    border-radius: 8px;
    overflow: hidden;
    outline: 2px solid #030111;
    
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

interface Propscard {
  item: ProdutosInterface;
  i: number;
  slicePar1?: number;
  slicePar2?: number;
}
//       slice par 1 e 2 mostram de qual a qual item será exibido, é definido no componente populares, pai deste
export const CardProd = ({ item, i }: Propscard) => {
  const { setMudaCor } = useContext(MudaCorCtx);
  return (
    <React.Fragment key={i}>
      {item.image === "" ? (
        ""
      ) : (
        <Link
          to={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
          onClick={() => setMudaCor(item.primeiraCor)}

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
                    {item.finalPrice !== undefined
                      ? item.finalPrice.toFixed(2).replace(".", ",")
                      : "Preço indisponível"}
                  </p>
                  <p
                    className={` text-[10px]  truncate line-through text-[#a7a7a7b1] flex  ${item.PorcentagemDeDesconto <= 0 ? "hidden" : ""
                      }`}
                  >
                    <i className="text-[10px]">R$</i>
                    {item.price.toFixed(2).replace(".", ",")}
                  </p>
                  <div
                    className={` w-8 h-4 border border-solid border-roxo rounded-md flex justify-center items-center text-roxo  ${item.PorcentagemDeDesconto <= 0 ? "hidden" : ""
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
  );
};
