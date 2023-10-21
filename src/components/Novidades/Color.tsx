import React, { useContext, useState } from "react";
import { RadioStyled } from "./InputRadio";
import { Label } from "@radix-ui/react-label";
import ColorContext, { Cor } from "@/Context/ColorContext";
import MudaCorCtx from "@/Context/StateColorContext";

export const Colors = () => {
  const cores = useContext(ColorContext);

  const { mudaCor, setMudaCor } = useContext(MudaCorCtx);

  const handlecorChange = (cor: Cor) => {
    setMudaCor(cor);
  };

  return (
    <RadioStyled>
      {cores.map((cor: Cor, i: number) => (
        <React.Fragment key={i}>
          <div className="flex items-center">
            <input
              type="radio"
              className="input"
              checked={mudaCor === cor}
              onChange={() => handlecorChange(cor)}
            />
            <Label>{cor.cor}</Label>
          </div>
        </React.Fragment>
      ))}
    </RadioStyled>
  );
};
