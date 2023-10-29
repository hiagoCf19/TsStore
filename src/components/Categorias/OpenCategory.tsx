import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { TiArrowBackOutline } from "react-icons/ti";
import React, { Fragment, useState } from "react";
import { category } from "@/routes";
import { ContentCategory } from "./OpenCategoryContent";

interface PropsCategory {
  propsCategory: string;
}

export const AllCategorys = ({ propsCategory }: PropsCategory) => {
  const [ativo, setAtivo] = useState(
    propsCategory === "Camisa"
      ? 0
      : propsCategory === "Conjuntos"
      ? 1
      : propsCategory === "Oculos"
      ? 2
      : propsCategory === "Tênis"
      ? 3
      : null
  );

  return (
    <React.Fragment>
      <Header
        props={
          <Link to={"/"}>
            <div className="sm:w-[120px] w-[50px] sm:mt-1">
              <TiArrowBackOutline size={40} color={"#875cff"} />
            </div>
          </Link>
        }
        line={<div className="h-[1px] w-full bg-roxo"></div>}
      />
      <section className="flex gap-4 sm:mx-[100px] sm:mt-10 flex-col sm:flex-row ">
        <aside className="border-none sm:border-r sm:border-solid sm:border-roxo sm:p-3 flex sm:flex-col text-[18px] sm:ml-[-20px] gap-4 text-[#a7a7a7d7] flex-wrap justify-center sm:justify-start sm:h-[80vh]">
          {category.map((AllCategory, i) => (
            <Fragment key={i}>
              <Link
                to={`/${AllCategory}`}
                className={` sm:mr-2 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#a21caf] hover:before:[box-shadow:_30px_30px_30px_30px_#a31caf7e] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 active:text-[#FFF] relative bg-neutral-800 sm:w-48 w-[170px] border text-left p-3 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-10 before:h-10 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-10 after:h-10 after:content['']  after:bg-[#a21caf] after:right-8 after:top-3 after:rounded-full after:blur-lg ${
                  ativo === i
                    ? " after:duration-500 border-[#a21caf] before:[box-shadow:_30px_20px_10px_25px_#6439ae] after:-right-8 before:right-12 before:-bottom-8 before:blur underline underline-offset-4 decoration-2 text-roxo scale-105  "
                    : ""
                }`}
                onClick={() => {
                  setAtivo(i);
                }}
              >
                {AllCategory}
              </Link>
            </Fragment>
          ))}
        </aside>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:w-full ">
            {ativo === 0 ? (
              <img
                src="Assets/camisasBanner.png"
                alt={propsCategory}
                className="sm:h-[400px] h-[180px] sm:ml-20 mx-5 rounded-xl"
              />
            ) : ativo === 1 ? (
              <img
                src="Assets/conjuntosBanner.png"
                alt={propsCategory}
                className="sm:h-[400px] h-[180px] sm:ml-20 mx-5 rounded-xl"
              />
            ) : ativo === 2 ? (
              <img
                src="Assets/conjuntosBanner.png"
                alt={propsCategory}
                className="sm:h-[400px] h-[180px] sm:ml-20 mx-5 rounded-xl"
              />
            ) : ativo === 3 ? (
              <img
                src="Assets/tenisBanner.png"
                alt={propsCategory}
                className="sm:h-[400px] h-[180px] sm:ml-20 mx-5 rounded-xl"
              />
            ) : (
              ""
            )}
          </div>
          <ContentCategory props={propsCategory} />
        </div>
      </section>
    </React.Fragment>
  );
};
