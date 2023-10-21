import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}
const MudaCorCtx = createContext({});

export function MudaCorProvider({ children }: Children) {
  const [mudaCor, setMudaCor] = useState({});

  return (
    <MudaCorCtx.Provider value={{ mudaCor, setMudaCor }}>
      {children}
    </MudaCorCtx.Provider>
  );
}

export default MudaCorCtx;
