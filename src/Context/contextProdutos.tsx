import { ReactNode, createContext } from "react";
interface Children {
  children: ReactNode;
}
export interface ProdutosInterface {
  nome: string;
  descricao: string;
  price: number;
  image: string;
  imageTwo?: string;
  imageThree?: string;
  mudaCor?: string;
  primeiraCor: string;
  segundaCor: string;
  terceiraCor: string;
}
const ProdutoCtx = createContext<ProdutosInterface[]>([]);

export function ProdutoProvider({ children }: Children) {
  const produto: ProdutosInterface[] = [
    {
      nome: "Camiseta Conforto",
      descricao:
        "Multicores e tamanhos. Tecido de algodão 100% Modelagem unissex.",
      price: 70,
      image: "Assets/Mobile/Imagens cards/Cconforto.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Calça Alfaiataria",
      descricao:
        "Modelo Wide Leg alfaiataria em linho. Uma peça pra a vida toda",
      price: 180,
      image: "Assets/Mobile/Imagens cards/Card calça.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Tênis Chunky",
      descricao:
        "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex",
      price: 250,
      image: "Assets/Mobile/Imagens cards/Card tenis.png",
      primeiraCor: "brancoooo",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Jaqueta Jeans",
      descricao:
        "Modelo unissex oversized gola de camurça. Atemporal e autêntica. ",
      price: 150,
      image: "Assets/Mobile/Imagens cards/jaqueta.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Óculos Redondo",
      descricao:
        "Armação metálica em grafite com lentes arredondadas. Sem erro!",
      price: 120,
      image: "Assets/Mobile/Imagens cards/oculos.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Moletom Manfinity",
      descricao: "Conjunto com moletom & short para o inverno",
      price: 149,
      image: "Assets/Mobile/Imagens cards/MoletomBlue.png",
      imageTwo: "Assets/Mobile/Imagens cards/moletomOffwhite.png",
      imageThree: "Assets/Mobile/Imagens cards/moletomBlack.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Bolsa Coringa",
      descricao:
        "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
      price: 120,
      image: "Assets/Mobile/Imagens cards/bolsa.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
    {
      nome: "Bolsa Coringa",
      descricao:
        "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
      price: 120,
      image: "Assets/Mobile/Imagens cards/bolsa.png",
      primeiraCor: "branco",
      segundaCor: "roxo",
      terceiraCor: "Rosa",
    },
  ];

  return <ProdutoCtx.Provider value={produto}>{children}</ProdutoCtx.Provider>;
}

export default ProdutoCtx;
