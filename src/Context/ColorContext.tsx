import { ReactNode, createContext } from "react";
interface Children {
  children: ReactNode;
}
export interface Cor {
  cor: string;
}
const ColorContext = createContext<Cor[]>([]);

export function ColorProvider({ children }: Children) {
  // globalContext.ts
  const cores: Cor[] = [
    {
      cor: "Azul claro",
    },
    {
      cor: "Off-White",
    },
    {
      cor: "Preto",
    },
  ];

  return (
    <ColorContext.Provider value={cores}>{children}</ColorContext.Provider>
  );
}

export default ColorContext;
