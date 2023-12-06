import { BackGrad } from "@/Styles/Background";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { CuponABA } from "./cuponABA";

import { GiAmpleDress } from "react-icons/gi";
import React from "react";

export interface Allcupons {
  icon: React.ReactElement;
  category: string;
  text: string;
  prazo: string;
}
export const Cupons = () => {
  const AllCupons: Allcupons[] = [
    {
      icon: <GiAmpleDress />,
      category: "Roupas Femininas",
      text: "5% off em roupas femininas",
      prazo: "permanente",
    },
  ];
  return (
    <BackGrad>
      <section className="animate__animated animate__fadeIn flex flex-col gap-5">
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
        <div className=" flex  flex-col mx-[15%] my-10 py-10 gap-3 ">
          <h1 className=" uppercase -tracking-tighter font-semibold   sm:text-[24px] sm:mb-4 text-[18px]">
            Cupons
          </h1>
          <CuponABA cupons={AllCupons} />
        </div>
      </section>
      <div className={`absolute bottom-0 w-full`}>
        <Footer />
      </div>
    </BackGrad>
  );
};
