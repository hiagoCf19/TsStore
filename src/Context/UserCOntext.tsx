import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}

const UserCtx = createContext<any>({});

export function UserProvider({ children }: Children) {
  const userName = sessionStorage.getItem("userName");

  const [nomeDoUsuario, setNomeDoUsuario] = useState(userName);
  const [enderecoDoUsuario, setEnderecoDoUsuario] = useState({});

  return (
    <UserCtx.Provider
      value={{
        nomeDoUsuario,
        setNomeDoUsuario,
        enderecoDoUsuario,
        setEnderecoDoUsuario,
      }}
    >
      {children}
    </UserCtx.Provider>
  );
}

export default UserCtx;
