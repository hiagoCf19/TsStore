import { BackGrad } from "@/Styles/Background";
import { Header } from "../../../Header/Header";
import { FormEndereco } from "./FormEndereco";

import { ResumoComItem } from "../../Etapa1/resumoComItem";
import { useState } from "react";

export const Endereco = () => {
  const [next, setNext] = useState<boolean>(false);
  return (
    <BackGrad>
      <div className="fixed bg-transp w-full z-50">
        <Header
          line={""}
          props={
            <div className=" px-2 sm:h-10 flex items-center justify-between w-full">
              <img
                src="Assets/tsStore.svg"
                alt="logo"
                className=" w-[90px] sm:w-[110px] "
              />
            </div>
          }
        />
      </div>
      <div className="h-[50px] w-full"></div>
      <div className="w-full flex justify-center flex-col ">
        <div className="flex justify-center sm:pt-16  sm:h-[50vh]   sm:gap-5 gap-3 sm:mx-5 mx-2 flex-col sm:flex-row  py-5">
          <FormEndereco next={next} setNext={setNext} />
          <ResumoComItem
            rotaDoContinue={next ? "/endereco-para-entrega" : ""}
          />
        </div>
      </div>


    </BackGrad>
  );
};
