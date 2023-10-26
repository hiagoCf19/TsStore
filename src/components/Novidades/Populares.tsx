import MudaCorCtx from "@/Context/StateColorContext";
import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BotaoStyled } from "../UiVerse/BotaoStyled";
import { TitleGeneric } from "../UiVerse/title";

export const Bombando: React.FC = () => {
  const { setMudaCor }: any = useContext(MudaCorCtx);

  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  return (
    <section
      className="mx-8 sm:mx-[90px] flex flex-col gap-4"
      id="produtos-do-momento"
    >
      <div className="flex flex-col  gap-8">
        <div className=" flex flex-col sm:flex-row w-full sm:flex-wrap gap-8 sm:mx-10">
          {produtos.map((item: ProdutosInterface, i: number) => (
            <div
              className=" flex flex-col gap-5 border-b-[1px] shadow-md shadow-[#875cff] sm:w-[19.875rem] rounded-[6px] pb-4 "
              key={i}
            >
              <img
                src={item.image}
                alt="card"
                className="w-full h-[25rem] rounded-t-[6px]"
              />
              <div className="flex flex-col gap-4 px-3 ">
                <p className=" text-xl font-bold">{item.nome}</p>
                <span className=" font-normal text-base leading-6 text-[#a7a7a7] truncate  ">
                  {item.descricao}
                </span>
                <p className="text-xl font-bold">{`R$ ${item.price
                  .toFixed(2)
                  .replace(".", ",")}`}</p>
              </div>
              <Link
                to={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setMudaCor(item.primeiraCor)}
                className="flex items-center px-4 w-min"
              >
                <BotaoStyled content="Ver mais " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
