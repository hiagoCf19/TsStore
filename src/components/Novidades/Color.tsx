import React, { useContext } from "react";
import { RadioStyled } from "./InputRadio";
import { Label } from "@radix-ui/react-label";
import MudaCorCtx from "@/Context/StateColorContext";

export interface Props {
  primeiraCor: string;
  segundaCor?: string;
  terceiraCor?: string;
}
export const Colors = ({ primeiraCor, segundaCor, terceiraCor }: Props) => {
  const { mudaCor, setMudaCor }: any = useContext(MudaCorCtx);
  const handlecorChange = (cor: string) => {
    setMudaCor(cor);
  };
  mudaCor === "Not" ? setMudaCor(primeiraCor) : null;

  console.log(segundaCor);
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
            segundaCor === undefined ? "hidden" : null
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
