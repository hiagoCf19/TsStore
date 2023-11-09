import UserCtx from "@/Context/UserCOntext";
import { User } from "lucide-react";
import { useContext } from "react";

import { Link } from "react-router-dom";

export const Entradas = () => {
  const { nomeDoUsuario } = useContext(UserCtx);
  return (
    <div className=" hidden sm:block">
      <div className="text-white flex gap-5 items-center">
        {nomeDoUsuario === null ? (
          <Link to={"/login"} className="flex items-center gap-3 font-semibold">
            <User color="#725cfff0" />
            Login
          </Link>
        ) : (
          <div>Criar modal para user logado: {nomeDoUsuario}</div>
        )}
      </div>
    </div>
  );
};
