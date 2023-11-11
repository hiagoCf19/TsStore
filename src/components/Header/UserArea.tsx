import UserCtx from "@/Context/UserCOntext";
import { useContext } from "react";

export const UserArea = () => {
  const { nomeDoUsuario } = useContext(UserCtx);
  return (
    <>
      <p>{nomeDoUsuario}</p>
    </>
  );
};
