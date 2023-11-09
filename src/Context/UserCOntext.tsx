import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}

const UserCtx = createContext<any>({});

export function UserProvider({ children }: Children) {
  const [nomeDoUsuario, setNomeDoUsuario] = useState(null);

  return (
    <UserCtx.Provider value={{ nomeDoUsuario, setNomeDoUsuario }}>
      {children}
    </UserCtx.Provider>
  );
}

export default UserCtx;
