import { prods } from "@/mocks/dados";
import { ReactNode, createContext } from "react";
export interface Children {
  children: ReactNode;
}
export interface ProdutosInterface {
  id: number;
  destiny: string;
  category: string;
  nome: string;
  descricao: string;
  price: number;
  image: string;
  imageTwo?: string;
  imageThree?: string;
  mudaCor?: string;
  primeiraCor: string;
  segundaCor?: string | undefined;
  terceiraCor?: string;
  PorcentagemDeDesconto: number;
  finalPrice?: number;
  quantidade: number;
  cor?: string;
  tamanho?: string;
}
const ProdutoCtx = createContext<ProdutosInterface[]>([]);

export function ProdutoProvider({ children }: Children) {
  const catalogados = prods;
  const produtosComPrecoFinal = catalogados.map((produto) => {
    const desconto = (produto.PorcentagemDeDesconto / 100) * produto.price;
    const finalPrice = produto.price - desconto;
    return { ...produto, finalPrice };
  });
  const produto = [...produtosComPrecoFinal];

  return <ProdutoCtx.Provider value={produto}>{children}</ProdutoCtx.Provider>;
}

export default ProdutoCtx;
