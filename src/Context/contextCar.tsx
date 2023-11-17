import { ReactNode, createContext, useState } from "react";
import { ProdutosInterface } from "./contextProdutos";
interface Children {
  children: ReactNode;
}

const CarCtx = createContext<any>({});

export function CarrinhoProvider({ children }: Children) {
  const [car, setCar] = useState<any>([]);
  const adicionarItemAoCarrinho = (
    category: ProdutosInterface,
    nome: ProdutosInterface,
    price: ProdutosInterface,
    image: ProdutosInterface,
    primeiraCor: ProdutosInterface,
    segundaCor: ProdutosInterface,
    terceiraCor: ProdutosInterface,
    PorcentagemDeDesconto: ProdutosInterface,
    finalPrice: ProdutosInterface
  ) => {
    const ItemCarrinho = {
      category,
      nome,
      price,
      image,
      primeiraCor,
      segundaCor,
      terceiraCor,
      PorcentagemDeDesconto,
      finalPrice,
    };
    setCar([...car, ItemCarrinho]);
  };
  return (
    <CarCtx.Provider value={{ car, adicionarItemAoCarrinho }}>
      {children}
    </CarCtx.Provider>
  );
}

export default CarCtx;
