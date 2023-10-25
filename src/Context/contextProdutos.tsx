import { ReactNode, createContext } from "react";
interface Children {
  children: ReactNode;
}
export interface ProdutosInterface {
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
  PorcentagemDeDesconto?: number;
}
const ProdutoCtx = createContext<ProdutosInterface[]>([]);

export function ProdutoProvider({ children }: Children) {
  const produto: ProdutosInterface[] = [
    {
      category: "Camisa",
      nome: "Camiseta Paris",
      descricao:
        "Multicores e tamanhos. Tecido de algodão 100% Modelagem unissex.",
      price: 45,
      image: "Assets/Produtos/casualWear/casualWearCaramelo.png",
      imageTwo: "Assets/Produtos/casualWear/ParisBranca.png",
      imageThree: "Assets/Produtos/casualWear/ParisVerde.png",
      primeiraCor: "Caramelo",
      segundaCor: "Preto",
      terceiraCor: "Verde",
    },
    {
      category: "Conjunto",
      nome: "Manfinity Homme",
      descricao:
        "Manfinity Homme Homens Gráfica Letra Moletom & Cintura Com Cordão Calças De Treino",
      price: 240,
      image: "Assets/Produtos/kit outfit/kitLilas.png",
      imageTwo: "Assets/Produtos/kit outfit/kitBlack.png",
      imageThree: "Assets/Produtos/kit outfit/kitRed.png",
      primeiraCor: "Roxo",
      segundaCor: "Preto",
      terceiraCor: "Vermelho",
    },

    {
      category: "Conjunto",
      nome: "Essence Split",
      descricao:
        "Modelo unissex oversized gola de camurça. Atemporal e autêntica. ",
      price: 150,
      image: "Assets/Produtos/conjuntoFeminino/CjtPink.png",
      imageTwo: "Assets/Produtos/conjuntoFeminino/CjtYellow.png",
      imageThree: "Assets/Produtos/conjuntoFeminino/CjtBlack.png",
      primeiraCor: "Rosa",
      segundaCor: "Amarelo",
      terceiraCor: "Preto",
      PorcentagemDeDesconto: 20,
    },
    {
      category: "Oculos",
      nome: "Óculos Redondo",
      descricao:
        "Armação metálica em grafite com lentes arredondadas. Sem erro!",
      price: 100,
      image: "Assets/Produtos/Oculos/oculosTransparent.png",
      imageTwo: "Assets/Produtos/Oculos/oculosBeje.png",
      imageThree: "Assets/Produtos/Oculos/oculosPink.png",
      primeiraCor: "Transparente",
      segundaCor: "Marrom",
      terceiraCor: "Rosa",
    },
    {
      category: "Calça",
      nome: "Conjunto Manfinity",
      descricao: "Conjunto com moletom & short para o inverno",
      price: 149,
      image: "Assets/Produtos/conjuntoManfinity/moletomBlue.png",
      imageTwo: "Assets/Produtos/conjuntoManfinity/moletomMarfim.png",
      imageThree: "Assets/Produtos/conjuntoManfinity/moletomBlack.png",
      primeiraCor: "Azul",
      segundaCor: "Marfim",
      terceiraCor: "Preto",
    },
    {
      category: "Tenis",
      nome: "Tênis Chunky",
      descricao:
        "Tenis indicado para Corrida, Academia e Caminhada. Leve, Macio, Confortável e Respirável. Moda Academia Modelo unissex",
      price: 160,
      image: "Assets/Produtos/TenisCorrida/tenisWhite.png",
      imageTwo: "Assets/Produtos/TenisCorrida/tenisblack.png",
      imageThree: "Assets/Produtos/TenisCorrida/tenisBlue.png",
      primeiraCor: "Branco",
      segundaCor: "Preto",
      terceiraCor: "Azul",
      PorcentagemDeDesconto: 15,
    },
    {
      category: "Tenis",
      nome: "Nike Quest 4",
      descricao: "O Nike favorito dos corredores",
      price: 230,
      image: "Assets/Produtos/TenisNike/nikeTenis.svg",
      primeiraCor: "Branco",
      PorcentagemDeDesconto: 10,
    },
  ];

  return <ProdutoCtx.Provider value={produto}>{children}</ProdutoCtx.Provider>;
}

export default ProdutoCtx;
