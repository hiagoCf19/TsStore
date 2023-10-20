import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext } from "react";

export const Bombando: React.FC = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  return (
    <section className="mx-8 sm:mx-[6.25rem]">
      <div className="flex flex-col  gap-8">
        <h1 className=" font-medium text-[1.75rem] text-center flex justify-center">
          Produtos que estão bombando!
        </h1>
        <div className=" flex flex-col sm:flex-row w-full sm:flex-wrap sm:justify-center gap-8">
          {produtos.map((produto: ProdutosInterface, i: number) => (
            <div
              className=" flex flex-col gap-5 border-b-[1px] border-x-[1px] border-dotted border-[#a7a7a7] sm:w-[21.875rem] "
              key={i}
            >
              <img
                src={produto.image}
                alt="card"
                className="w-full h-[25rem] rounded-md"
              />
              <div className="flex flex-col gap-4 px-3 ">
                <p className=" text-xl font-bold">{produto.nome}</p>
                <span className=" font-normal text-base leading-6 text-[#404040] ">
                  {produto.descricao}
                </span>
                <p className="text-xl font-bold">{`R$ ${produto.price.toFixed(
                  2
                )}`}</p>
              </div>
              <button className="w-[6.375rem] h-[2.25rem] mx-5 bg-[#9353FF] hover:bg-[#6b3bbc] text-white font-semibold text-base flex items-center justify-center mb-4">
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
