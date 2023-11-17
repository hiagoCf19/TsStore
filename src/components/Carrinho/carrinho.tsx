import { BackGrad } from "@/Styles/Background";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { ResumoComItem } from "./resumoComItem";
import { CardProd } from "../styledElements/Card";
import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext, useState } from "react";
import CarCtx from "@/Context/contextCar";
import { Footer } from "../Footer/Footer";
import { CarrinhoVazio } from "./carrinhoVazio";
import { CarrinhoComItem } from "./carrinhoComItem";
import { ResumoVazio } from "./ResumoVazio";

export const Carrinho = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  const { car } = useContext(CarCtx);
  const [cheio] = useState(car.length >= 1 ? true : false);
  const recomendado = produtos.filter((produto) => {
    return produto.PorcentagemDeDesconto > 0;
  });

  return (
    <>
      <BackGrad>
        <div className="fixed bg-background w-full z-50">
          <Header
            line={""}
            props={
              <div className="sm:bg-background px-2 sm:h-10 flex items-center justify-between w-full">
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
          <div className="flex justify-center sm:pt-16  sm:h-[50vh] h-[85vh]  sm:gap-5 gap-3 sm:mx-5 mx-2 flex-col sm:flex-row ">
            {cheio ? <CarrinhoComItem /> : <CarrinhoVazio />}
            {cheio ? <ResumoComItem /> : <ResumoVazio />}
          </div>
          <div className={`${cheio ? "" : "hidden"} `}>
            <h1 className="text-center flex justify-center  text-xl uppercase tracking-[5px] text-semibold pb-8 ">
              Recomendados
            </h1>
            <div className=" flex flex-wrap sm:flex-nowrap justify-center overflow-hidden  gap-2 ">
              {recomendado.slice(0, 7).map((recomendado, i) => (
                <CardProd item={recomendado} i={i} key={i} />
              ))}
            </div>
            <Link
              to={"/todas-as-nossas-ofertas"}
              className="flex justify-center underline text-muted-foreground hover:text-roxo text-[16px] py-5"
            >
              Ver todos
            </Link>
          </div>
        </div>

        <div className={`${cheio ? "" : "absolute bottom-0 w-full"}`}>
          <Footer />
        </div>
      </BackGrad>
    </>
  );
};
