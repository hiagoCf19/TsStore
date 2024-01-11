import { Fragment, useState } from "react";
import { FaBarcode } from "react-icons/fa";

import { MdPix } from "react-icons/md";
import { RadioVertical } from "../Etapa2/Endereco/OpcaoDoUser";
import { FaCreditCard } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { StyledButtonSm } from "@/components/styledElements/BotaoSMstyled";

export const FormasDePagamento = () => {
  const payForm = [
    {
      forma: "Cartão de crédito",
      icon: <FaCreditCard size={26} />,
      text: "Parcelamento em até 12x",
    },
    {
      forma: "Pix",
      icon: <MdPix size={30} />,
      text: "Aprovação imediata",
    },
    {
      forma: "Cartão de débito",
      icon: <BsCreditCard2BackFill size={30} />,
      text: "",
    },
    {
      forma: "Boleto",
      icon: <FaBarcode size={28} />,
      text: "aprovado em até 3 dias úteis",
    },
  ];

  const [SelectForma, setSelectForma] = useState(payForm[0].forma);
  const mudarForma = (form: any) => {
    setSelectForma(form);
  };
  console.log(SelectForma);
  return (
    <Fragment>
      <h1 className="uppercase tracking-wide font-semibold  sm:text-[18px] sm:mb-4 text-[16px] p-4 py-2 sm:hidden">
        Formas de pagamento
      </h1>
      <div className="sm:w-[40%] sm:h-max  bg-transp rounded-md overflow-hidden overflow-y-scroll p-4 sm:pb-10  ">
        <h1 className="uppercase tracking-wide font-semibold  sm:text-[18px] sm:mb-4 text-[16px] p-4 py-2 hidden sm:block">
          Formas de pagamento
        </h1>
        <ul>
          {payForm.map((form, i) => (
            <li key={i}>
              <div className="flex border-b border-solid border-roxo  py-3 items-center gap-2">
                <RadioVertical>
                  <input
                    type="radio"
                    className="input"
                    id={form.forma}
                    value={form.forma}
                    checked={SelectForma === form.forma}
                    onChange={() => {
                      mudarForma(form.forma);
                    }}
                  />
                </RadioVertical>
                <div className="flex items-center gap-5">
                  {form.icon}
                  <div className="flex flex-col gap-1">
                    <p className="text-[20px] font-bold">{form.forma}</p>
                    <span className="text-[#a7a7a7] text-base">
                      {form.text}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className="flex justify-end py-8  cursor-pointer"
          onClick={() => alert("Fim do projeto!")}
        >
          <StyledButtonSm>Finalizar</StyledButtonSm>
        </div>
      </div>
    </Fragment>
  );
};
