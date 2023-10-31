import { User } from "lucide-react";
import { SearchStyled } from "../UiVerse/SearchStyled";
import { Link } from "react-router-dom";
import { BotaoSM } from "../UiVerse/BotaoSMstyled";

export const Entradas = () => {
  return (
    <div className=" hidden sm:block">
      <div className="text-white flex gap-5 items-center">
        <SearchStyled />
        <Link to={"/login"} className="flex items-center gap-3 font-semibold">
          <User color="#725cff" />
          Login
        </Link>
        <Link to={"/realize-seu-cadastro"} className="font-semibold">
          <BotaoSM content={"Cadastre-se"} />
        </Link>
      </div>
    </div>
  );
};
