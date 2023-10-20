import { ProdutosInterface } from "@/Context/contextProdutos";

import React, { Fragment } from "react";

import { HeaderProduto } from "./HeaderProduto";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputRadio } from "./InputRadio";
import { Button } from "../ui/button";

export const ProdutoExibido = ({
  nome,
  price,
  descricao,
  image,
}: ProdutosInterface) => {
  return (
    <React.Fragment>
      <HeaderProduto />
      <div className="border border-dotted border-[#0000004e] flex justify-center flex-col sm:flex-row m-4 gap-4 pb-4 sm:m-[100px] sm:border-none ">
        <img
          src={image}
          alt={nome}
          className="sm:w-[550px] sm:h-[622px] sm:rounded-[8px]"
        />
        <div className="flex flex-col px-3 gap-4 sm:gap-8 py-6">
          <p className=" font-bold text-[18px] sm:text-2xl">{nome}</p>
          <p className="text-[#030303ac] sm:text-lg">{descricao}</p>
          <div className="h-[1px] w-full bg-[#000]"></div>
          <p className="text-xl font-medium sm:text-2xl">
            R$ {price.toFixed(2)}
          </p>
          <div className="flex flex-col gap-3">
            <span className="text-[#a7a7a7] text-[14px]">
              Vendido e entregue por TsSore
            </span>
            <div className="h-[1px] w-full bg-[#0008]"></div>
          </div>
          {/* CORES */}
          <div className=" flex flex-col gap-4">
            <p className=" font-bold sm:text-xl"> Cores:</p>
            <RadioGroup defaultValue="option-one" className="flex gap-3">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className=" bg-[#C2D9FF]"
                />
                <Label htmlFor="option-one">Azul claro</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="bg-[#e2decf]"
                />
                <Label htmlFor="option-two">Offwhite</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="option-three"
                  id="option-three"
                  className="bg-[#1f1f1fcb]"
                />
                <Label htmlFor="option-three">Preto</Label>
              </div>
            </RadioGroup>
          </div>
          {/* TAMANHOS */}
          <Fragment>
            <p className="font-bold sm:text-xl">Tamanhos:</p>
            <InputRadio />
          </Fragment>
          {/* Botão */}
          <Button className="w-max bg-[#9353FF] hover:bg-[#6b3bbc] text-base">
            {" "}
            Adicionar a sacola
          </Button>
          <Fragment></Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};
