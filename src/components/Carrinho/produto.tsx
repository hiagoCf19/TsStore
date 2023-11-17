import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { Excluir } from "../styledElements/delete";

export const ProdutoNoCarrinho = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  return (
    <div className="border-b border-solid border-roxo h-[67%] overflow-hidden overflow-y-scroll">
      {/* PRODUTO 1 */}
      <div className="sm:px-4 px-2 py-2 border-t border-solid border-[#725cff31]  flex sm:gap-4 justify-between w-full items-center ">
        <div className="flex sm:gap-4 gap-2">
          <div>
            <img
              src={produtos[0].image}
              alt=""
              className=" w-20 h-20 rounded-lg"
            />
          </div>{" "}
          <div className="flex flex-col sm:gap-1 gap-4 justify-center sm:justify-normal">
            <p className="sm:text-lg font-medium">{produtos[0].nome}</p>
            <div className="flex flex-col  text-[#a7a7a7] sm:text-base text-sm ">
              <span className="hidden sm:block">Tamanho: p</span>
              <span className="hidden sm:block">Variação: Verde</span>
              {/* CONTROLE DE QUANTIDADE */}
              <div className="sm:hidden">
                <div className=" flex items-center gap-2 ">
                  <div className="flex items-center gap-2 border border-solid border-roxo p-1 px-1 rounded-md">
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                      <Plus color="#725cff" />
                    </button>
                    0
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                    >
                      <Minus color="#725cff" />
                    </button>
                  </div>
                  <Excluir />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTROLE DE QUANTIDADE */}
        <div className="hidden sm:block">
          <div className=" flex items-center gap-1 ">
            <div className="flex items-center gap-4 border border-solid border-roxo p-1 px-3 rounded-md">
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
              >
                <Plus color="#725cff" />
              </button>
              0
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-180 duration-300"
              >
                <Minus color="#725cff" />
              </button>
            </div>
            <Excluir />
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-1 ">
          <div className=" flex gap-1 justify-end w-full">
            <span className="text-[10px] text-roxo">
              {" "}
              -{produtos[0].PorcentagemDeDesconto}%
            </span>
            <span className=" line-through text-[10px] text-[#a7a7a7] ">
              R${produtos[0].price.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="font-medium sm:text-[18px]">
            R$ {produtos[0].finalPrice?.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>

      {/* PRODUTO 2 */}
      <div className="sm:px-4 px-2 py-2 border-t border-solid border-[#725cff31]  flex sm:gap-4 justify-between w-full items-center ">
        <div className="flex sm:gap-4 gap-2">
          <div>
            <img
              src={produtos[0].image}
              alt=""
              className=" w-20 h-20 rounded-lg"
            />
          </div>{" "}
          <div className="flex flex-col sm:gap-1 gap-4 justify-center sm:justify-normal">
            <p className="sm:text-lg font-medium">{produtos[0].nome}</p>
            <div className="flex flex-col  text-[#a7a7a7] sm:text-base text-sm ">
              <span className="hidden sm:block">Tamanho: p</span>
              <span className="hidden sm:block">Variação: Verde</span>
              {/* CONTROLE DE QUANTIDADE */}
              <div className="sm:hidden">
                <div className=" flex items-center gap-2 ">
                  <div className="flex items-center gap-2 border border-solid border-roxo p-1 px-1 rounded-md">
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                      <Plus color="#725cff" />
                    </button>
                    0
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                    >
                      <Minus color="#725cff" />
                    </button>
                  </div>
                  <Excluir />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTROLE DE QUANTIDADE */}
        <div className="hidden sm:block">
          <div className=" flex items-center gap-1 ">
            <div className="flex items-center gap-4 border border-solid border-roxo p-1 px-3 rounded-md">
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
              >
                <Plus color="#725cff" />
              </button>
              0
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-180 duration-300"
              >
                <Minus color="#725cff" />
              </button>
            </div>
            <Excluir />
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-1 ">
          <div className=" flex gap-1 justify-end w-full">
            <span className="text-[10px] text-roxo">
              {" "}
              -{produtos[0].PorcentagemDeDesconto}%
            </span>
            <span className=" line-through text-[10px] text-[#a7a7a7] ">
              R${produtos[0].price.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="font-medium sm:text-[18px]">
            R$ {produtos[0].finalPrice?.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
    </div>
  );
};
