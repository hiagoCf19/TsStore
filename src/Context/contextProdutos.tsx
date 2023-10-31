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
  finalPrice?: number;
}
const ProdutoCtx = createContext<ProdutosInterface[]>([]);

export function ProdutoProvider({ children }: Children) {
  const catalogados: ProdutosInterface[] = [
    {
      category: "Camisa",
      nome: "Camiseta Casual Wear",
      descricao:
        "Multicores e tamanhos. Tecido de algodão 100% Modelagem unissex.",
      price: 45,
      PorcentagemDeDesconto: 10,
      finalPrice: 0,
      image: "Assets/Produtos/casualWear/ParisVerde.png",
      imageTwo: "Assets/Produtos/casualWear/ParisBranca.png",
      imageThree: "Assets/Produtos/casualWear/casualWearCaramelo.png",
      primeiraCor: "Verde",
      segundaCor: "Preto",
      terceiraCor: "Caramelo",
    },
    {
      category: "Conjuntos",
      nome: "Manfinity Homme",
      descricao:
        "Manfinity Homme Homens Gráfica Letra Moletom & Cintura Com Cordão Calças De Treino",
      price: 240,
      PorcentagemDeDesconto: 0,
      image: "Assets/Produtos/kit outfit/kitLilas.png",
      imageTwo: "Assets/Produtos/kit outfit/kitBlack.png",
      imageThree: "Assets/Produtos/kit outfit/kitRed.png",
      primeiraCor: "Roxo",
      segundaCor: "Preto",
      terceiraCor: "Vermelho",
    },

    {
      category: "Conjuntos",
      nome: "Essence Split",
      descricao:
        "Modelo unissex oversized gola de camurça. Atemporal e autêntica. ",
      price: 150,
      PorcentagemDeDesconto: 22,
      image: "Assets/Produtos/conjuntoFeminino/CjtPink.png",
      imageTwo: "Assets/Produtos/conjuntoFeminino/CjtYellow.png",
      imageThree: "Assets/Produtos/conjuntoFeminino/CjtBlack.png",
      primeiraCor: "Rosa",
      segundaCor: "Amarelo",
      terceiraCor: "Preto",
    },
    {
      category: "Oculos",
      nome: "Óculos Redondo",
      descricao: "Armação metálica com lentes arredondadas",
      price: 100,
      PorcentagemDeDesconto: 50,
      image: "Assets/Produtos/Oculos/rose.jpeg",
      imageTwo: "Assets/Produtos/Oculos/gold.jpeg",
      imageThree: "",
      primeiraCor: "Rose",
    },
    {
      category: "Conjuntos",
      nome: "Conjunto Manfinity",
      descricao: "Conjunto com moletom & short para o inverno",
      price: 149,
      PorcentagemDeDesconto: 5,
      image: "Assets/Produtos/conjuntoManfinity/moletomBlue.png",
      imageTwo: "Assets/Produtos/conjuntoManfinity/moletomMarfim.png",
      imageThree: "Assets/Produtos/conjuntoManfinity/moletomBlack.png",
      primeiraCor: "Azul",
      segundaCor: "Marfim",
      terceiraCor: "Preto",
    },
    {
      category: "Tênis",
      nome: "Tênis Chunky",
      descricao:
        "Tenis indicado para Corrida, Academia e Caminhada. Leve, Macio, Confortável e Respirável. Moda Academia Modelo unissex",
      price: 160,
      PorcentagemDeDesconto: 15,
      image: "Assets/Produtos/TenisCorrida/tenisWhite.png",
      imageTwo: "Assets/Produtos/TenisCorrida/tenisblack.png",
      imageThree: "Assets/Produtos/TenisCorrida/tenisBlue.png",
      primeiraCor: "Branco",
      segundaCor: "Preto",
      terceiraCor: "Azul",
    },
    {
      category: "Feminino",
      nome: "",
      descricao: "",
      price: 0,
      PorcentagemDeDesconto: 0,
      image: "",
      primeiraCor: "",
    },
    {
      category: "Infantil",
      nome: "Bolsa Infantil Delicada",
      descricao:
        "Bolsa Infantil Menina Delicada Moderna Pink Leve Macia Confortavel Antiderrapante Bolsa Tranversal dia das crianças",
      price: 53,
      PorcentagemDeDesconto: 0,
      image: "Assets/Produtos/InfantilBolsa/infantilBolsa.jpeg",
      primeiraCor: "Rosa",
    },
    {
      category: "Masculino",
      nome: "Camisa Longline",
      descricao:
        "Camiseta Verão 2023 Masculina Novo Estilo Ice Silk Impressão Xadrez Com Manga Curta",
      price: 60,
      PorcentagemDeDesconto: 5,

      image: "Assets/Produtos/Longline Masc/black.jpeg",
      primeiraCor: "Preto",
    },
    {
      category: "Perfume",
      nome: "Perfume Feminino Lili",
      descricao:
        "E aquele perfume que você está querendo comprar a muito tempo, Os frascos são de 50 ml e possuímos uma linha de fragrâncias incríveis que estão disponíveis para sua escolha.",
      price: 100,
      PorcentagemDeDesconto: 50,

      image: "Assets/Produtos/PerfumeLily/perfumeLily.jpeg",
      primeiraCor: "Gold",
    },
    {
      category: "Eletrônicos",
      nome: "Teclado Mecânico Led",
      descricao:
        "Teclado Semi Mecânico Led Chroma Rgb Iluminado Jogos Pc Usb retroiluminado",
      price: 118,
      PorcentagemDeDesconto: 51,
      image: "Assets/Produtos/Teclado/tecladoFt1.jpeg",
      primeiraCor: "Cinza",
    },
    {
      category: "Acessorios",
      nome: "",
      descricao: "",
      price: 0,
      PorcentagemDeDesconto: 0,
      image: "",
      primeiraCor: "",
    },
  ];
  const produtosComPrecoFinal = catalogados.map((produto) => {
    const desconto = (produto.PorcentagemDeDesconto / 100) * produto.price;
    const finalPrice = produto.price - desconto;
    return { ...produto, finalPrice };
  });
  const produto = [...produtosComPrecoFinal];

  return <ProdutoCtx.Provider value={produto}>{children}</ProdutoCtx.Provider>;
}

export default ProdutoCtx;
