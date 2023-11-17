import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}

const CarCtx = createContext<any>({});

export function CarrinhoProvider({ children }: Children) {
  const [car, setCar] = useState([1]);

  return <CarCtx.Provider value={{ car, setCar }}>{children}</CarCtx.Provider>;
}

export default CarCtx;
