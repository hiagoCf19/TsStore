import { ReactNode, createContext, useState } from "react";
import { ProdutosInterface } from "./contextProdutos";
interface Children {
  children: ReactNode;
}

const CarCtx = createContext<any>({});

export function CarrinhoProvider({ children }: Children) {
  const [car, setCar] = useState<any>([]);

  const adicionarItemAoCarrinho = (
    id: ProdutosInterface,
    category: ProdutosInterface,
    nome: ProdutosInterface,
    price: ProdutosInterface,
    image: ProdutosInterface,
    PorcentagemDeDesconto: ProdutosInterface,
    finalPrice: ProdutosInterface,
    cor: string,
    tamanho: string,
    quantidade: ProdutosInterface,
    saveAdress: boolean
  ) => {
    const ItemCarrinho = {
      id,
      category,
      nome,
      price,
      image,
      PorcentagemDeDesconto,
      finalPrice,
      cor,
      tamanho,
      quantidade,
      saveAdress,
    };
    setCar([...car, ItemCarrinho]);
  };
  return (
    <CarCtx.Provider value={{ car, setCar, adicionarItemAoCarrinho }}>
      {children}
    </CarCtx.Provider>
  );
}

export default CarCtx;
