import { BackGrad } from "@/Styles/Background";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import { ResumoComItem } from "../resumoComItem";
import { DeliveryOption } from "./OpcaoDoUser";
import { useState } from "react";

export const VisualizaEnd = () => {
  const bases = [
    {
      title: "Entrega via correios",
      span: "Cadastre um endereço  para receber seu pedido",
      custo: "5 a 10 dias úteis",
    },
    {
      title: "Retirada na loja",
      span: "Retire seu produto em uma de nossas lojas",
      custo: "1 dia útil",
    },
  ];
  const [typeEntrega, settypeEntrega] = useState<string>(bases[0].title);
  const TipoDeEntrega = (type: any) => {
    settypeEntrega(type);
  };
  return (
    <BackGrad>
      <div className="fixed bg-transp2 w-full z-50">
        <Header
          line={""}
          props={
            <div className="sm:bg-transp px-2 sm:h-10 flex items-center justify-between w-full">
              <img
                src="Assets/tsStore.svg"
                alt="logo"
                className=" w-[90px] sm:w-[110px] "
              />
            </div>
          }
        />
      </div>
      <div className="h-[50px] w-full bg-transp"></div>
      <div className="w-full flex justify-center flex-col ">
        <div className="flex justify-center sm:pt-16  sm:h-[50vh]   sm:gap-5 gap-3 sm:mx-5 mx-2 flex-col sm:flex-row  py-5">
          <div className="sm:w-[40%] sm:h-max  bg-transp rounded-md overflow-hidden overflow-y-scroll p-4 pb-10  ">
            <DeliveryOption
              typeEntrega={typeEntrega}
              bases={bases}
              TipoDeEntrega={TipoDeEntrega}
            />
          </div>

          <ResumoComItem
            rotaDoContinue={
              typeEntrega === "Entrega via correios"
                ? "/cadastre-seu-endereco"
                : "/metodos-de-pagamento"
            }
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </BackGrad>
  );
};
