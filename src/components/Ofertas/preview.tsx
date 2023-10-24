import ProdutoCtx, { ProdutosInterface } from "@/Context/contextProdutos";
import { ArrowDown } from "lucide-react";
import { useContext } from "react";

export const Preview = () => {
  const produtos = useContext(ProdutoCtx);

  const produtosComDesconto = produtos.filter((item) => {
    return item.hasOwnProperty("PorcentagemDeDesconto");
  });
  const precoFinal = produtosComDesconto.map((item) => {
    if (item.PorcentagemDeDesconto !== undefined) {
      const desconto = (item.price * item.PorcentagemDeDesconto) / 100;
      const precoComDesconto = item.price - desconto;
      return precoComDesconto;
    } else {
      return;
    }
  });

  return (
    <section
      className="mx-5 flex gap-4 flex-col relative z-10"
      id="Ofertas-do-mes"
    >
      <h1 className=" uppercase -tracking-tighter font-semibold">Ofertas</h1>

      <div className="flex gap-4 overflow-hidden overflow-x-auto">
        {produtosComDesconto.map((produto: ProdutosInterface, i: number) => (
          <div className="flex flex-col gap-2 " key={i}>
            <div className="bg-cor25 w-[150px] h-[150px] rounded-md overflow-hidden relative">
              <div>
                <div className="absolute ml-2 my-2 p-1 px-2 bg-roxo rounded-full">
                  <span className="flex font-semibold">
                    <ArrowDown size={18} />
                    {produto.PorcentagemDeDesconto}%
                  </span>
                </div>
                <img src={produto.image} alt="img" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-[#FFF]">{produto.nome}</h3>
              <div className="flex gap-1 items-center w-max ">
                <p className="text-[17px] font-semibold">
                  R$ {precoFinal[i]?.toFixed(2).replace(".", ",")}{" "}
                </p>
                <span className="line-through text-[14px] text-[#a7a7a7]">
                  R${produto.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
