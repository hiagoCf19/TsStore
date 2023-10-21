import React, { useContext } from "react";
import { RadioStyled } from "./InputRadio";
import { Label } from "@radix-ui/react-label";
import MudaCorCtx from "@/Context/StateColorContext";

export interface Props {
  primeiraCor: string;
  segundaCor: string;
  terceiraCor: string;
}
export const Colors = ({ primeiraCor, segundaCor, terceiraCor }: Props) => {
  const { mudaCor, setMudaCor }: any = useContext(MudaCorCtx);
  const handlecorChange = (cor: string) => {
    setMudaCor(cor);
  };

  return (
    <RadioStyled>
      <React.Fragment>
        <div className="flex items-center">
          <input
            type="radio"
            className="input"
            checked={mudaCor === primeiraCor}
            onChange={() => handlecorChange(primeiraCor)}
          />
          <Label>{primeiraCor}</Label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            className="input"
            checked={mudaCor === segundaCor}
            onChange={() => handlecorChange(segundaCor)}
          />
          <Label>{segundaCor}</Label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            className="input"
            checked={mudaCor === terceiraCor}
            onChange={() => handlecorChange(terceiraCor)}
          />
          <Label>{terceiraCor}</Label>
        </div>
      </React.Fragment>
    </RadioStyled>
  );
};
