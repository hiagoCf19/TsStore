import styled from "styled-components";

import { Fragment, useContext } from "react";
import { Label } from "@radix-ui/react-label";
import MudaCorCtx from "@/Context/VariacaoContext";
export const RadioStyled = styled.div`
  display: flex;

  input {
    appearance: none;
    /* remove default */
    display: block;
    margin: 10px;
    width: 20px;
    height: 20px;
    outline: none;
    border-radius: 100%;
    cursor: pointer;

    box-shadow: #725cff 0 1px 4px, inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
    background-color: #00000061;
    background-color: hsla(0, 0%, 0%, 0.2);
    background-image: radial-gradient(
      hsla(260, 100%, 85%, 1) 10%,
      hsla(260, 100%, 65%, 1) 15%,
      hsla(260, 100%, 55%, 0.3) 38%,
      hsla(260, 100%, 25%, 0) 60%
    );

    background-repeat: no-repeat;
    transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
      transform 1.25s cubic-bezier(0.8, 0, 1, 1);

    background-position: 30px 0; /* Ajuste para a esquerda */
  }

  &:checked input {
    transition: background-position 0.2s 0.15s cubic-bezier(0, 0, 0.2, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1);

    background-position: 0 0; /* Reseta a posição */
  }

  &:active input {
    transform: scale(1.5);
    transition: transform 0.8 cubic-bezier(0, 0, 0.2, 1);
    outline: transparent;
  }

  /* The left/right direction logic */

  input,
  &:active input {
    background-position: 40px 0;
  }

  .input:checked {
    background-position: 0 0;
  }

  .input:checked ~ .input,
  .input:checked ~ .input:active {
    background-position: 20px 0; /* Ajuste para a direita */
  }
`;
export const Tamanho = () => {
  const { tamanhos, selectedTamanho, setSelectedTamanho } =
    useContext(MudaCorCtx);

  const handleTamanhoChange = (tamanho: string) => {
    setSelectedTamanho(tamanho);
  };

  return (
    <Fragment>
      <div className="flex">
        {tamanhos.map((tamanho: string, i: number) => (
          <div className="flex items-center  flex-col outline-none " key={i}>
            <Label htmlFor={tamanho}>{tamanho}</Label>
            <RadioStyled>
              <input
                type="radio"
                className="input"
                id={tamanho}
                checked={selectedTamanho === tamanho}
                onChange={() => {
                  handleTamanhoChange(tamanho);
                }}
              />
            </RadioStyled>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
