import UserCtx from "@/Context/UserCOntext";
import { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDown,
  ChevronRight,
  LogOut,
  Repeat,
  ShoppingBag,
  Ticket,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Linha } from "../OpenProduct/Produto";

export const UserArea = () => {
  const { nomeDoUsuario } = useContext(UserCtx);
  const [openArea, setOpenArea] = useState<boolean>(false);
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div
            className="flex items-center gap-1 justify-center"
            onClick={() => (!openArea ? setOpenArea(true) : setOpenArea(false))}
          >
            <span className={`font-bold text-lg `}>{nomeDoUsuario} </span>

            <ChevronDown size={18} color={!openArea ? "#a7a7a7" : "#725cff"} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-transp2 border border-solid border-roxo">
          <div className="pb-4 ">
            <div className="flex items-center gap-2">
              <div>
                <Avatar>
                  {/* Avatar image para quandop eu mpedir imagem para o usuario */}
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-background border border-solid border-roxo">
                    {nomeDoUsuario.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{nomeDoUsuario}</h1>
                <Link
                  to={`/${nomeDoUsuario.toLowerCase()}-perfil`}
                  className="text-sm mt-[-3px] flex items-center gap-1 text-[#a7a7a7] hover:underline cursor-pointer "
                >
                  Meu perfil
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <Linha />
          <div className="flex flex-col gap-3 pt-3">
            <Link to={"/meu-carrinho"} className="flex items-center gap-3">
              <ShoppingBag /> Meu carrinho{" "}
            </Link>
            <Link to={"/minhas-trocas"} className="flex items-center gap-3">
              <Repeat />
              Minhas trocas
            </Link>
            <Link
              to={"/cupons-de-desconto"}
              className="flex items-center gap-3"
            >
              <Ticket />
              Cupons
            </Link>
            <p className="flex items-center gap-3">
              {" "}
              <LogOut /> Sair{" "}
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
