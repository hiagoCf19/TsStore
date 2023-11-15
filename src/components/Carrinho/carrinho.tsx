import { BackGrad } from "@/Styles/Background";
import { Header } from "../Header/Header";

export const Carrinho = () => {
  return (
    <BackGrad>
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

      <div className="w-full flex justify-center flex-col">
        <div className="flex justify-center py-12 sm:h-[50vh] h-[80vh]  gap-10 mx-5 flex-col sm:flex-row">
          <div className=" sm:w-[50%] bg-transp rounded-lg h-full sm:h-auto">
            area dos produtos
          </div>
          <div className=" sm:w-[30%] border border-solid border-roxo h-[50%]">
            resumo
          </div>
        </div>
        <div className="flex justify-center">recomendados</div>
      </div>
    </BackGrad>
  );
};
