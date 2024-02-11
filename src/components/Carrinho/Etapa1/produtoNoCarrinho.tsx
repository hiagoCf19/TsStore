import { ProdutosInterface } from "@/Context/contextProdutos";
import { Minus, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { Excluir } from "../../styledElements/delete";
import CarCtx from "@/Context/contextCar";

export const ProdutoNoCarrinho = () => {
  const { car, setCar } = useContext(CarCtx);
  const [itensExibidos, setItensExibidos] = useState(car);

  const novosItensExibidos = [...itensExibidos];
  const novoCarrinho = [...car];
  const AttDados = (i: number, newQtd: number) => {
    const { price, PorcentagemDeDesconto } = novosItensExibidos[i];
    const novaQuant = newQtd;

    const descontoTotal = (PorcentagemDeDesconto / 100) * price;

    const novoPreco = novaQuant * (price - descontoTotal);

    novosItensExibidos[i] = {
      ...novosItensExibidos[i],
      quantidade: novaQuant,
      finalPrice: novoPreco,
    };
    setItensExibidos([...novosItensExibidos]);

    const atualizaItens = {
      finalPrice: price - descontoTotal,
      quantidade: novaQuant,
    };

    novoCarrinho[i] = { ...novoCarrinho[i], ...atualizaItens };
    setCar([...novoCarrinho]);
  };
  const remover = (i: number) => {
    car.splice(i, 1);
    setItensExibidos([...car]);
  };

  return (
    <div className="border-b border-solid border-roxo h-[67%] overflow-hidden overflow-y-scroll">
      {/* PRODUTO 1 */}
      {novosItensExibidos.map((produto: ProdutosInterface, i: number) => (
        <div
          className="sm:px-4 px-2 py-2 border-t border-solid border-[#725cff31]  flex sm:gap-4 justify-between w-full items-center "
          key={i}
        >
          <div className="flex sm:gap-4 gap-2">
            <div>
              <img
                src={produto.image}
                alt=""
                className=" w-20 h-20 rounded-lg"
              />
            </div>{" "}
            <div className="flex flex-col gap-1 justify-center sm:justify-normal">
              <p className="sm:text-lg font-medium hidden sm:block">
                {produto.nome}
              </p>
              <p className="sm:text-lg font-medium sm:hidden flex flex-col">
                <span>{produto.nome}</span>
                {/* mobile */}
                <span className="text-[#a7a7a7c8] text-sm">
                  {produto.cor} {""}
                  {produto.category === "Tênis" ||
                    produto.category === "Eletrônicos" ||
                    produto.category === "Acessorios" ||
                    produto.category === "Perfume" ? (
                    ""
                  ) : (
                    <i>({produto.tamanho})</i>
                  )}
                </span>
              </p>
              <div
                className={`flex flex-col  text-[#a7a7a7] sm:text-base text-sm  `}
              >
                <span className=" hidden sm:block ">
                  {produto.category === "Tênis" ||
                    produto.category === "Eletrônicos" ||
                    produto.category === "Acessorios" ||
                    produto.category === "Perfume" ? (
                    ""
                  ) : (
                    <span> Tamanho: {produto.tamanho} </span>
                  )}
                </span>
                <span className="hidden sm:block">Variação: {produto.cor}</span>
                {/* CONTROLE DE QUANTIDADE MOBILE */}
                <div className="sm:hidden">
                  <div className=" flex items-center gap-2 ">
                    <div className="flex items-center gap-2 border border-solid border-roxo p-1 px-1 rounded-md">
                      <button
                        title="Add New"
                        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                        onClick={() =>
                          AttDados(i, novosItensExibidos[i].quantidade + 1)
                        }
                      >
                        <Plus color="#725cff" />
                      </button>
                      {produto.quantidade}
                      <button
                        title="Add New"
                        className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                        onClick={() => {
                          AttDados(i, novosItensExibidos[i].quantidade - 1);
                        }}
                      >
                        <Minus color="#725cff" />
                      </button>
                    </div>

                    <Excluir
                      remov={() => {
                        remover(i);
                        console.log("removido");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CONTROLE DE QUANTIDADE DESKTOP*/}
          <div className="hidden sm:block">
            <div className=" flex items-center gap-1 ">
              <div className="flex items-center gap-4 border border-solid border-roxo p-1 px-3 rounded-md">
                <button
                  title="Add New"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                  onClick={() =>
                    AttDados(i, novosItensExibidos[i].quantidade + 1)
                  }
                >
                  <Plus color="#725cff" />
                </button>
                {produto.quantidade}
                <button
                  title="Add New"
                  className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                  onClick={() => {
                    AttDados(i, novosItensExibidos[i].quantidade - 1);
                  }}
                >
                  <Minus color="#725cff" />
                </button>
              </div>
              <div>
                <Excluir
                  remov={() => {
                    remover(i);
                    console.log("removido");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col justify-center gap-1 ">
            <div
              className={`${produto.PorcentagemDeDesconto <= 0 ? "hidden" : ""
                } flex gap-1 justify-end w-full`}
            >
              <span className="text-[10px] text-roxo">
                {" "}
                -{produto.PorcentagemDeDesconto}%
              </span>
              <span className=" line-through text-[10px] text-[#a7a7a7] ">
                R${produto.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <p className="font-medium sm:text-[18px]">
              R$ {produto.finalPrice?.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
