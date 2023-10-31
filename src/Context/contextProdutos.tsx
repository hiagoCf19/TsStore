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
  PorcentagemDeDesconto: number;
}
const ProdutoCtx = createContext<ProdutosInterface[]>([]);

export function ProdutoProvider({ children }: Children) {
  const produto: ProdutosInterface[] = [
    {
      category: "Camisa",
      nome: "Camiseta Casual Wear",
      descricao:
        "Multicores e tamanhos. Tecido de algodão 100% Modelagem unissex.",
      price: 45,
      image: "Assets/Produtos/casualWear/ParisVerde.png",
      imageTwo: "Assets/Produtos/casualWear/ParisBranca.png",
      imageThree: "Assets/Produtos/casualWear/casualWearCaramelo.png",
      primeiraCor: "Verde",
      segundaCor: "Preto",
      terceiraCor: "Caramelo",
      PorcentagemDeDesconto: 29,
    },
    {
      category: "Conjuntos",
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
      PorcentagemDeDesconto: 0,
    },

    {
      category: "Conjuntos",
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
      PorcentagemDeDesconto: 22,
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
      PorcentagemDeDesconto: 0,
    },
    {
      category: "Conjuntos",
      nome: "Conjunto Manfinity",
      descricao: "Conjunto com moletom & short para o inverno",
      price: 149,
      image: "Assets/Produtos/conjuntoManfinity/moletomBlue.png",
      imageTwo: "Assets/Produtos/conjuntoManfinity/moletomMarfim.png",
      imageThree: "Assets/Produtos/conjuntoManfinity/moletomBlack.png",
      primeiraCor: "Azul",
      segundaCor: "Marfim",
      terceiraCor: "Preto",
      PorcentagemDeDesconto: 5,
    },
    {
      category: "Tênis",
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
      category: "Feminino",
      nome: "",
      descricao: "",
      price: 0,
      image: "",
      primeiraCor: "",
      PorcentagemDeDesconto: 0,
    },
    {
      category: "Infantil",
      nome: "",
      descricao: "",
      price: 0,
      image: "",
      primeiraCor: "",
      PorcentagemDeDesconto: 0,
    },
    {
      category: "Masculino",
      nome: "",
      descricao: "",
      price: 0,
      image: "",
      primeiraCor: "",
      PorcentagemDeDesconto: 0,
    },
    {
      category: "Perfume",
      nome: "Perfume Feminino Lili",
      descricao:
        "E aquele perfume que você está querendo comprar a muito tempo, Os frascos são de 50 ml e possuímos uma linha de fragrâncias incríveis que estão disponíveis para sua escolha.",
      price: 100,
      image: "Assets/Produtos/PerfumeLily/perfumeLily.jpeg",
      primeiraCor: "Gold",
      PorcentagemDeDesconto: 50,
    },
    {
      category: "Eletrônicos",
      nome: "Teclado Mecânico Led",
      descricao:
        "Teclado Semi Mecânico Led Chroma Rgb Iluminado Jogos Pc Usb retroiluminado",
      price: 118,
      image: "Assets/Produtos/Teclado/tecladoFt1.jpeg",
      primeiraCor: "Cinza",
      PorcentagemDeDesconto: 51,
    },
    {
      category: "Acessorios",
      nome: "",
      descricao: "",
      price: 0,
      image: "",
      primeiraCor: "",
      PorcentagemDeDesconto: 0,
    },
  ];

  return <ProdutoCtx.Provider value={produto}>{children}</ProdutoCtx.Provider>;
}

export default ProdutoCtx;
