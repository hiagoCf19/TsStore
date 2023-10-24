import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { ArrowDown } from "lucide-react";
import { useContext } from "react";

export const Ofertas = () => {
  const produtos = useContext(ProdutoCtx);
  const produtosComDesconto = produtos.filter((item) => {
    return item.hasOwnProperty("precoComDesconto");
  });
  console.log(produtosComDesconto);

  return (
    <section className="mx-5 flex gap-4 flex-col">
      <div className="">
        <h1 className=" uppercase -tracking-tighter font-semibold">Ofertas</h1>
      </div>
      <div className="flex gap-4 overflow-hidden overflow-x-auto">
        {produtosComDesconto.map((produto: ProdutosInterface, i: number) => (
          <div className="flex flex-col gap-2 " key={i}>
            <div className="bg-cor25 w-[150px] h-[150px] rounded-md overflow-hidden relative">
              <div>
                <div className="absolute ml-4 my-2 p-1 px-2 bg-roxo rounded-full">
                  <span className="flex font-semibold">
                    <ArrowDown size={18} />
                    15%
                  </span>
                </div>
                <img
                  src="Assets/Produtos/casualWear/ParisBranca.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-[#FFF]">{produto.nome}</h3>
              <div className="flex gap-1 items-center">
                <p className="text-[17px] font-semibold">
                  R${" "}
                  {produto.precoComDesconto !== undefined
                    ? produto.precoComDesconto.toFixed(2)
                    : ""}
                </p>
                <span className="line-through text-[14px] text-[#a7a7a7]">
                  RS${produto.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
