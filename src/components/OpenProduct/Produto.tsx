import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { useContext } from "react";
import { Colors } from "./Color";
import styled from "styled-components";
import { Tamanho } from "./tamanho";
import { Header } from "@/components/Header/Header";
import { BackGrad } from "@/Styles/Background";
import CarCtx from "@/Context/contextCar";
import MudaCorCtx from "@/Context/VariacaoContext";
import { LogButton } from "../styledElements/Logbutton";
import { Footer } from "../Footer/Footer";
import { CardProd } from "../styledElements/Card";
import "animate.css";
import { Toaster, toast } from "sonner";
import { Button } from "../ui/button";

export const Linha = styled.div`
  width: max;
  height: 1px;
  background-color: var(--roxo);
`;
export const ProdutoExibido = ({
  id,
  nome,
  price,
  descricao,
  image,
  primeiraCor,
  segundaCor,
  terceiraCor,
  PorcentagemDeDesconto,
  finalPrice,
  quantidade,
  category,
  destiny,
}: ProdutosInterface) => {
  const { adicionarItemAoCarrinho } = useContext(CarCtx);
  const { mudaCor, selectedTamanho } = useContext(MudaCorCtx);

  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  const MesmaCategoria = produtos.filter((produtos) => {
    const semelhantes =
      produtos.destiny === destiny || produtos.category === category;
    return semelhantes;
  });

  return (
    <BackGrad>
      <section className="animate__animated animate__fadeIn">
        <div className="flex flex-col gap-4">
          {/* header  */}
          <div className="fixed bg-transp w-full z-50  ">
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

          <div className="h-[50px] w-full"></div>
          <div className=" pb-5 pt-2 flex justify-center items-center  sm:mt-12 relative">
            <div className="sm:shadow-none shadow-lg shadow-roxo border border-solid border-roxo flex justify-center flex-col sm:flex-row mx-4 gap-4 pb-4 sm:m-0 sm:border-none sm:items-center   rounded-[3px]  sm:mx-[200px] overflow-y-hidden w-full sm:w-auto ">
              <div className="flex-1 w-full">
                <img
                  src={image}
                  alt={nome}
                  className=" sm:rounded-[8px] max-h-[20.125rem] float-right sm:max-h-[500px] hidden sm:block"
                />
              </div>

              <div className=" flex-1 flex flex-col px-3  gap-4 sm:gap-4 sm:py-6 py-2">
                <p className=" font-bold text-[18px] sm:text-2xl">{nome}</p>
                <div className="flex-1 w-full">
                  <img
                    src={image}
                    alt={nome}
                    className=" rounded-[8px] max-h-[20.125rem] w-full sm:max-h-[500px]  sm:hidden "
                  />
                </div>
                <p className=" sm:text-lg text-[#a7a7a7]">{descricao}</p>
                <Linha />
                <div className="text-xl font-medium sm:text-2xl flex gap-1 items-center ">
                  <p className=" font-bold text-white">
                    <i className="text-[12px]"> R$ </i>
                    {finalPrice !== undefined
                      ? finalPrice.toFixed(2).replace(".", ",")
                      : "Preço indisponível"}
                  </p>
                  <div className="flex gap-1">
                    <p
                      className={` text-[10px]  truncate line-through text-[#a7a7a7b1] flex ${PorcentagemDeDesconto <= 0 ? "hidden" : ""
                        }`}
                    >
                      <i className="text-[10px]">R$</i>
                      {price.toFixed(2).replace(".", ",")}
                    </p>
                    <div
                      className={` w-8 h-4 border border-solid border-roxo rounded-md flex justify-center items-center text-roxo  ${PorcentagemDeDesconto <= 0 ? "hidden" : ""
                        }`}
                    >
                      <span className="text-[10px]">
                        -{PorcentagemDeDesconto}%{" "}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Vendido e entregue */}
                <div className="hidden sm:block">
                  <div className="flex flex-col gap-3">
                    <span className="text-[#a7a7a7] text-[14px]">
                      Vendido e entregue por TsSore
                    </span>
                    <Linha />
                  </div>
                </div>

                {/* CORES */}
                <div className=" flex flex-col gap-4">
                  <p className=" font-bold sm:text-xl"> Cores:</p>
                  {segundaCor !== undefined ? (
                    <Colors
                      primeiraCor={primeiraCor}
                      segundaCor={segundaCor}
                      terceiraCor={terceiraCor}
                    />
                  ) : terceiraCor !== undefined ? (
                    <Colors
                      primeiraCor={primeiraCor}
                      segundaCor={segundaCor}
                      terceiraCor={terceiraCor}
                    />
                  ) : (
                    <Colors primeiraCor={primeiraCor} />
                  )}
                </div>
                {/* TAMANHOS */}
                <div
                  className={`${category === "Tênis" ||
                    category === "Eletrônicos" ||
                    category === "Acessorios" ||
                    category === "Perfume"
                    ? "hidden"
                    : ""
                    }  font-bold sm:text-xl flex flex-col gap-3`}
                >
                  <p>Tamanhos:</p>
                  <Tamanho />
                </div>
                {/* Botão */}

                <div
                  onClick={() => {
                    adicionarItemAoCarrinho(
                      id,
                      category,
                      nome,
                      price,
                      image,
                      PorcentagemDeDesconto,
                      finalPrice,
                      mudaCor,
                      selectedTamanho,
                      quantidade
                    );
                  }}
                  className="flex  justify-center sm:justify-normal"
                >
                  <Toaster />
                  <Button
                    onClick={() =>
                      toast(`Item adicionado ao carrinho`, {
                        description: ` ${quantidade} ${nome}`,
                      })
                    }
                  >
                    <LogButton type="button" content="Adicionar" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`py-2 flex flex-col sm:justify-center gap-5${MesmaCategoria.length < 5 ? "sm:mx-[200px]" : ""
            } `}
        >
          <h1 className=" uppercase -tracking-tighter font-semibold sm:flex sm:justify-center sm:text-[24px] sm:mb-4 text-[18px] mx-5">
            Compras relacionadas
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-6 sm:mx-80">
            {MesmaCategoria.slice(0, 6).map((produto: ProdutosInterface, i: number) => (
              <CardProd item={produto} i={i} key={i} />
            ))}
          </div>
        </div>
      </section>
      <div className=" w-full">
        <Footer />
      </div>
    </BackGrad>
  );
};
