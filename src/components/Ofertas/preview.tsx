import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardProd } from "../styledElements/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface propsPreview {
  route: string
  title: string
}
export const Preview = ({ route, title }: propsPreview) => {
  const produtos = useContext(ProdutoCtx);

  return (
    <section
      className=" flex gap-4 flex-col relative justify-center w-full sm:items-center"
      id="Ofertas-do-mes"
    >
      <h1 className=" px-2 uppercase -tracking-tighter font-semibold sm:flex sm:justify-center sm:mb-5 sm:text-[24px]">
        {title}
      </h1>
      {/* MOBILE */}
      <Carousel className=" sm:hidden">
        <CarouselContent className="px-2 sm:px-0">
          {produtos
            .slice(1, 8)
            .sort(() => Math.random() - 0.5)
            .map((produto: ProdutosInterface, i: number) => (
              <CarouselItem className="basis-1/2 sm:basis-1/3" key={i}>
                <CardProd item={produto} i={i} slicePar1={1} slicePar2={11} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* DESKTOP */}
      <div className=" grid grid-cols-7 space-x-1 w-4/5 ">
        {produtos
          .slice(1, 8)
          .sort(() => Math.random() - 0.7)
          .map((produto: ProdutosInterface, i: number) => (
            <div
              className={` z-0 hidden sm:block ${produto.PorcentagemDeDesconto <= 0 ? "hidden" : ""
                } flex flex-col gap-2 `}
              key={i}
            >
              <CardProd item={produto} i={i} slicePar1={1} slicePar2={11} />
            </div>
          ))}
      </div>

      <Link
        to={route}
        className="flex justify-center underline text-muted-foreground hover:text-roxo"
      >
        Ver todos
      </Link>
    </section>
  );
};
