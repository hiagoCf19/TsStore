import { Fragment } from "react";
import styled from "styled-components";
const Radio = styled.div`
  .input {
    appearance: none;
    /* remove default */
    display: block;
    margin: 10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;

    box-shadow: #725cff 0 1px 4px, inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
    background-color: #00000061;
    background-image: radial-gradient(
      hsla(260, 100%, 85%, 1) 10%,
      hsla(260, 100%, 65%, 1) 15%,
      hsla(260, 100%, 55%, 0.3) 38%,
      hsla(260, 100%, 25%, 0) 60%
    );

    background-repeat: no-repeat;
    transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
      -webkit-transform 0.25s cubic-bezier(0.8, 0, 1, 1);
    outline: none;
  }

  .input:checked {
    transition: background-position 0.2s 0.15s cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .input:active {
    transform: scale(1.5);
    transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  /* The up/down direction logic */

  .input,
  .input:active {
    background-position: 0 24px;
  }

  .input:checked {
    background-position: 0 0;
  }

  .input:checked ~ .input,
  .input:checked ~ .input:active {
    background-position: 0 -24px;
  }
`;
export const DeliveryOption = ({ typeEntrega, bases, TipoDeEntrega }: any) => {
  return (
    <div>
      <h1
        className="uppercase tracking-wide font-semibold sm:flex  sm:text-[18px] sm:mb-4 text-[16px]"
        onClick={() => console.log(typeEntrega)}
      >
        Escolha a forma de entrega
      </h1>

      <div className="flex flex-col pt-7 sm:pt-0 gap-5">
        {bases.map((type: any, i: number) => (
          <Fragment key={i}>
            <div className="flex items-center gap-3">
              <Radio>
                <input
                  type="radio"
                  className="input"
                  id={type.title}
                  checked={typeEntrega === type.title}
                  onChange={() => {
                    TipoDeEntrega(type.title);
                  }}
                />
              </Radio>
              <div className="flex flex-col gap-1 w-full">
                <h1 className="font-bold sm:text-xl">{type.title}</h1>
                <span className="text-[#a7a7a7] text-[14px] sm:text-base ">
                  {type.span}
                </span>
              </div>
              <span className="flex justify-end  text-roxo font-medium sm:w-full text-[12px] sm:text-base ">
                {type.custo}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
