import { Header } from "../Header/Header";

import { CoHeader } from "../Header/CoHeader";
import { BackGrad } from "@/Styles/Background";
import { ProdutosInterface } from "@/Context/contextProdutos";
import { CardProd } from "../styledElements/Card";
import { Footer } from "../Footer/Footer";
interface PropsAll {
  title: string;
  diferenciador: any;
}
export const LayoutGenerico = ({ title, diferenciador }: PropsAll) => {
  return (
    <BackGrad>
      <div className="fixed bg-transp2 w-full z-50">
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
        <CoHeader />
      </div>
      <div className="sm:h-[9vh] h-[8vh] w-full mb-4"></div>
      <section className="flex w-full my-[2%] flex-col  sm:h-[75vh] h-[78vh] overflow-hidden ">
        <h1 className="uppercase tracking-wide font-semibold sm:flex  sm:text-[18px] sm:mb-4 text-[16px] sm:mx-[10%] p-4 ">
          {title}
        </h1>
        <div className="flex  flex-col sm:flex-row  gap-6 sm:mx-[10%] mx-2  ">
          <aside
            className=" flex-col  bg-transp rounded-md l p-4 pb-10 gap-4 w-[30%] h-[20vh]  sm:block hidden
          "
          >
            <img src="Assets/tsStore.svg" alt="logo" className="w-20 " />
          </aside>
          <div className="flex flex-wrap  sm:h-[74vh] bg-transp rounded-md  sm:p-2 overflow-y-scroll gap-2 w-full justify-center sm:justify-normal ">
            {diferenciador.map((pdt: ProdutosInterface, i: number) => (
              <CardProd item={pdt} i={i} key={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </BackGrad>
  );
};
