import { BackGrad } from "@/Styles/Background";
import { Header } from "../Header/Header";
import { LoadingAni } from "../styledElements/loading";
import { CoHeader } from "../Header/CoHeader";

export const Trocas = () => {
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
      <section>
        <div className="flex justify-center items-center flex-col-reverse gap-4 w-full h-[80vh] ">
          Em desenvolvimento...
          <LoadingAni />
        </div>
      </section>
    </BackGrad>
  );
};
