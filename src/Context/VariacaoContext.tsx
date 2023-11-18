import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}
interface MudaCorContextProps {
  mudaCor: string;
  setMudaCor: React.Dispatch<React.SetStateAction<string>>;
  tamanhos: string[];
  selectedTamanho: string;
  setSelectedTamanho: React.Dispatch<React.SetStateAction<string>>;
}
const MudaCorCtx = createContext({} as MudaCorContextProps);

export function MudaCorProvider({ children }: Children) {
  const [mudaCor, setMudaCor] = useState("Not");
  const tamanhos: string[] = ["PP", "P", "M", "G", "GG"];
  const [selectedTamanho, setSelectedTamanho] = useState(tamanhos[0]);

  return (
    <MudaCorCtx.Provider
      value={{
        mudaCor,
        setMudaCor,
        tamanhos,
        selectedTamanho,
        setSelectedTamanho,
      }}
    >
      {children}
    </MudaCorCtx.Provider>
  );
}

export default MudaCorCtx;
