import { ProdutosInterface } from "@/Context/contextProdutos";
import React, { Fragment } from "react";
import { HeaderProduto } from "./HeaderProduto";
import { InputRadio } from "./InputRadio";

import { Colors } from "./Color";
import { ResetCSS } from "@/Styles/Reset";
import styled from "styled-components";
import { BotaoStyled } from "../UiVerse/BotaoStyled";
const Linha = styled.div`
  width: max;
  height: 1px;
  background-color: #5cd2e6;
`;
export const ProdutoExibido = ({
  nome,
  price,
  descricao,
  image,
  primeiraCor,
  segundaCor,
  terceiraCor,
}: ProdutosInterface) => {
  return (
    <React.Fragment>
      <ResetCSS />
      <HeaderProduto />
      <div className=" flex justify-center items-center  sm:mt-12 h-[80vh]">
        <div className="sm:shadow-none shadow-lg shadow-[#5cd2e6] flex justify-center flex-col sm:flex-row m-4 gap-4 pb-4 sm:m-0 sm:border-none sm:items-center   rounded-[6px]  sm:mx-[200px] overflow-y-hidden">
          <div className="flex-1">
            <img
              src={image}
              alt={nome}
              className="sm:w-[34.375rem] rounded-[4px] sm:rounded-[8px] max-h-[28.125rem] w-[23.125rem] "
            />
          </div>

          <div className=" flex-1 flex flex-col px-3  gap-4 sm:gap-4 sm:py-6 py-2">
            <p className=" font-bold text-[18px] sm:text-2xl">{nome}</p>
            <p className=" sm:text-lg">{descricao}</p>
            <Linha />
            <p className="text-xl font-medium sm:text-2xl">
              R$ {price.toFixed(2)}
            </p>
            {/* Vendido e entregue */}
            <div className="flex flex-col gap-3">
              <span className="text-[#a7a7a7] text-[14px]">
                Vendido e entregue por TsSore
              </span>
              <Linha />
            </div>
            {/* CORES */}
            <div className=" flex flex-col gap-4">
              <p className=" font-bold sm:text-xl"> Cores:</p>
              <Colors
                primeiraCor={primeiraCor}
                segundaCor={segundaCor}
                terceiraCor={terceiraCor}
              />
            </div>
            {/* TAMANHOS */}
            <Fragment>
              <p className="font-bold sm:text-xl">Tamanhos:</p>
              <InputRadio />
            </Fragment>
            {/* Botão */}

            <BotaoStyled content="Adicionar" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
