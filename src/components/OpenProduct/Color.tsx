import React, { useContext, useEffect } from "react";

import { Label } from "@radix-ui/react-label";
import MudaCorCtx from "@/Context/VariacaoContext";
import { RadioStyled } from "./tamanho";

export interface Props {
  primeiraCor: string;
  segundaCor?: string;
  terceiraCor?: string;
}
export const Colors = ({ primeiraCor, segundaCor, terceiraCor }: Props) => {
  const { mudaCor, setMudaCor } = useContext(MudaCorCtx);
  const handlecorChange = (cor: string) => {
    setMudaCor(cor);
  };

  useEffect(() => {
    mudaCor === "Not" ? setMudaCor(primeiraCor) : null;
  }, []); //esse array vazio serve para garantir que esse useefect só será executado uma vez quando a página for recarregada

  return (
    <RadioStyled>
      <React.Fragment>
        <div className="flex items-center">
          <input
            type="radio"
            className="input"
            checked={mudaCor === primeiraCor}
            onChange={() => {
              handlecorChange(primeiraCor);
            }}
          />
          <Label>{primeiraCor}</Label>
        </div>
        <div
          className={`flex items-center ${
            segundaCor === undefined ? "hidden" : null
          }`}
        >
          <input
            type="radio"
            className="input"
            checked={mudaCor === segundaCor}
            onChange={() =>
              handlecorChange(segundaCor !== undefined ? segundaCor : "")
            }
          />
          <Label>{segundaCor}</Label>
        </div>
        <div
          className={`flex items-center ${
            terceiraCor === undefined ? "hidden" : null
          }`}
        >
          <input
            type="radio"
            className="input"
            checked={mudaCor === terceiraCor}
            onChange={() =>
              handlecorChange(terceiraCor !== undefined ? terceiraCor : "")
            }
          />
          <Label>{terceiraCor}</Label>
        </div>
      </React.Fragment>
    </RadioStyled>
  );
};
