import { FaShoppingCart } from "react-icons/fa";

import { BotaoStyled } from "../styledElements/BotaoStyled";
import { Link } from "react-router-dom";
export const CarrinhoVazio = () => {
  return (
    <div className=" sm:w-[50%]  bg-transp  rounded-lg h-[45vh] sm:h-auto overflow-hidden">
      <div className="flex justify-center h-[100%] items-center flex-col gap-4 text-lg font-medium text-[#a7a7a7]">
        <FaShoppingCart size={60} color={"#725cff"} />
        <h3>Monte um carrinho de compras!</h3>
        <span>adicione seus produtos</span>
        <Link to={"/todos-os-populares-do-momento"}>
          <BotaoStyled content="VER PRODUTOS" />
        </Link>
      </div>
    </div>
  );
};
