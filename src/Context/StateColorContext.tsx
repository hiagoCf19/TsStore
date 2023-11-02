import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}

const MudaCorCtx = createContext({});

export function MudaCorProvider({ children }: Children) {
  const [mudaCor, setMudaCor] = useState("Not");

  return (
    <MudaCorCtx.Provider value={{ mudaCor, setMudaCor }}>
      {children}
    </MudaCorCtx.Provider>
  );
}

export default MudaCorCtx;
