import { ProdutoNoCarrinho } from "./produto";
import { Link } from "react-router-dom";

export const CarrinhoComItem = () => {
  return (
    <div className=" sm:w-[50%]  bg-transp  rounded-lg h-[45vh] sm:h-auto overflow-hidden">
      <h1 className="p-4 text-lg font-semibold border-b border-solid border-roxo ">
        Meu carrinho
      </h1>
      <ProdutoNoCarrinho />
      <div className="flex sm:justify-between sm:px-5 px-2 sm:py-3 text-xl font-medium leading-5 h-[16%] items-center">
        <span className="sm:text-[16px] text-[14px] font-normal">
          Aproveite o frete grátis em produtos selecionados.{" "}
          <Link
            to={"/produtos/produtos-com-frete-gratis"}
            className="text-roxo hover:underline"
          >
            Ver produtos com frete gratis
          </Link>
        </span>
      </div>
    </div>
  );
};
