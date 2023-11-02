import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import React, { useContext } from "react";

import styled from "styled-components";
import { TitleGeneric } from "../UiVerse/title";
import { CardProd } from "../repetitivos/Card";
import { Link } from "react-router-dom";
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
