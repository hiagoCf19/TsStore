import { BackGrad } from "@/Styles/Background";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ResumoComItem } from "../Etapa1/resumoComItem";
import { FormasDePagamento } from "./FormasDePagamento";

export const HomePay = () => {
  return (
    <BackGrad>
      <section className="animate__animated animate__fadeIn">
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
        <div className="w-full flex justify-center flex-col  ">
          <div className="flex justify-center sm:pt-16  sm:h-[50vh]   sm:gap-5 gap-3 sm:mx-5 mx-2 flex-col   py-5">
            <div className="flex sm:flex-row flex-col w-full justify-center sm:gap-5 gap-3">
              <FormasDePagamento />
              <ResumoComItem rotaDoContinue="" />
            </div>
          </div>
        </div>
      </section>

      <div className="sm:absolute bottom-0 w-full">
        <Footer />
      </div>
    </BackGrad>
  );
};
