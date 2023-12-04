import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { category } from "@/routes";
import { ContentCategory } from "./OpenCategoryContent";
import { BackGrad } from "@/Styles/Background";
import { Footer } from "../Footer/Footer";

interface PropsCategory {
  propsCategory: string;
}

export const AllCategorys = ({ propsCategory }: PropsCategory) => {
  {
    /* UM ESTADO PARA CONTROLAR ONDE A ESTILIZAÇÃO DE ACTIVE ESTARA, PROPS CATEGORY SERÁ SEMPRE O A ROUTA, QUANDO FOR MASCULINO É PORQUE ESTÁ NA ROTA DE ROUPAS MASCULINAS E ETC... */
  }
  const [ativo, setAtivo] = useState(
    propsCategory === "Camisa"
      ? 0
      : propsCategory === "Conjuntos"
      ? 1
      : propsCategory === "Oculos"
      ? 2
      : propsCategory === "Tênis"
      ? 3
      : propsCategory === "Feminino"
      ? 4
      : propsCategory === "Infantil"
      ? 5
      : propsCategory === "Masculino"
      ? 6
      : propsCategory === "Perfume"
      ? 7
      : propsCategory === "Eletrônicos"
      ? 8
      : propsCategory === "Acessorios"
      ? 9
      : ""
  );
  const [animation, setAnimation] = useState(false);
  setTimeout(() => {
    setAnimation(false);
  }, 1000);
  console.log(animation);
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
      </div>
      <div className="sm:h-[9vh] h-[8vh] w-full mb-4"></div>
      <section className="flex gap-4 sm:mx-[100px] sm:mt-10 flex-col sm:flex-row pb-4 ">
        {/* BOTÕES ESTILIZADOS QUE EXIBEM EM QUAL CATEGORIA O USUARIO ESTÁ*/}
        <aside className="border-none sm:border-r sm:border-solid sm:border-roxo sm:p-3 flex sm:flex-col text-[18px] sm:ml-[-20px] sm:gap-4 gap-6 text-[#a7a7a7d7] flex-wrap justify-center sm:justify-start sm:h-[80vh]">
          {category.map((AllCategory, i) => (
            <Fragment key={i}>
              {/* AO CLICAR AQUI O USUARIO SERÁ DIRECIONADO PARA A ROTA CORRESPONDENTE.*/}

              <Link
                to={`/${AllCategory}`}
                className={` sm:mr-2 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#a21caf] hover:before:[box-shadow:_30px_30px_30px_30px_#a31caf7e] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 active:text-[#FFF] relative bg-neutral-800 sm:w-48 w-[170px] border text-left p-3 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-10 before:h-10 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-10 after:h-10 after:content['']  after:bg-[#a21caf] after:right-8 after:top-3 after:rounded-full after:blur-lg ${
                  ativo === i
                    ? " after:duration-500 border-[#a21caf] before:[box-shadow:_30px_20px_10px_25px_#6439ae] after:-right-8 before:right-12 before:-bottom-8 before:blur underline underline-offset-4 decoration-2 text-roxo scale-105  "
                    : ""
                }`}
                onClick={() => {
                  setAtivo(i);
                  setAnimation(true);
                }}
              >
                {AllCategory}
              </Link>
            </Fragment>
          ))}
        </aside>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:w-full "></div>
          <ContentCategory props={propsCategory} animation={animation} />
        </div>
      </section>
      <div className="sm:absolute bottom-0 w-full">
        <Footer />
      </div>
    </BackGrad>
  );
};
