import { ReactNode, createContext } from "react";
export interface Children {
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
      image: "Assets/Produtos/Camisas/casualWear/ParisVerde.png",
      imageTwo: "Assets/Produtos/Camisas/casualWear/ParisBranca.png",
      imageThree: "Assets/Produtos/Camisas/casualWear/casualWearCaramelo.png",
      primeiraCor: "Verde",
      segundaCor: "Preto",
      terceiraCor: "Caramelo",
    },

    {
      category: "Feminino",
      nome: "Essence Split",
      descricao:
        "Modelo unissex oversized gola de camurça. Atemporal e autêntica. ",
      price: 150,
      PorcentagemDeDesconto: 22,
      image: "Assets/Produtos/Feminino/conjuntoFeminino/CjtPink.png",
      imageTwo: "Assets/Produtos/Feminino/conjuntoFeminino/CjtYellow.png",
      imageThree: "Assets/Produtos/Feminino/conjuntoFeminino/CjtBlack.png",
      primeiraCor: "Rosa",
      segundaCor: "Amarelo",
      terceiraCor: "Preto",
    },
    {
      category: "Acessorios",
      nome: "Óculos Redondo",
      descricao: "Armação metálica com lentes arredondadas",
      price: 100,
      PorcentagemDeDesconto: 50,
      image: "Assets/Produtos/Acessorios/Oculos/rose.jpeg",
      imageTwo: "Assets/Produtos/Acessorios/Oculos/gold.jpeg",
      primeiraCor: "Rose",
      segundaCor: "Gold",
    },
    {
      category: "Masculino",
      nome: "Conjunto Manfinity",
      descricao: "Conjunto com moletom & short para o inverno",
      price: 149,
      PorcentagemDeDesconto: 5,
      image: "Assets/Produtos/Masculino/conjuntoManfinity/moletomBlue.png",
      imageTwo: "Assets/Produtos/Masculino/conjuntoManfinity/moletomMarfim.png",
      imageThree:
        "Assets/Produtos/Masculino/conjuntoManfinity/moletomBlack.png",
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
      image: "Assets/Produtos/Calcados/TenisCorrida/tenisWhite.png",
      imageTwo: "Assets/Produtos/Calcados/TenisCorrida/tenisblack.png",
      imageThree: "Assets/Produtos/Calcados/TenisCorrida/tenisBlue.png",
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
      image: "Assets/Produtos/infantil/InfantilBolsa/infantilBolsa.jpeg",
      primeiraCor: "Rosa",
    },
    {
      category: "Infantil",
      nome: "Bow Plissado",
      descricao: "Bow Plissado Malhado Floral Fofo Vestido Para Bebê",
      price: 67,
      PorcentagemDeDesconto: 13,
      image: "Assets/Produtos/infantil/bowPlis/bodyRosa.png",
      imageTwo: "Assets/Produtos/infantil/bowPlis/bodyRed.png",
      primeiraCor: "Rosa",
      segundaCor: "vermelho",
    },
    {
      category: "Masculino",
      nome: "Camisa Longline",
      descricao:
        "Camiseta Verão 2023 Masculina Novo Estilo Ice Silk Impressão Xadrez Com Manga Curta",
      price: 60,
      PorcentagemDeDesconto: 5,

      image: "Assets/Produtos/Masculino/Longline Masc/black.jpeg",
      primeiraCor: "Preto",
    },
    {
      category: "Perfume",
      nome: "Perfume Feminino Lili",
      descricao:
        "E aquele perfume que você está querendo comprar a muito tempo, Os frascos são de 50 ml e possuímos uma linha de fragrâncias incríveis que estão disponíveis para sua escolha.",
      price: 100,
      PorcentagemDeDesconto: 50,

      image: "Assets/Produtos/Perfumes/PerfumeLily/perfumeLily.jpeg",
      primeiraCor: "Gold",
    },
    {
      category: "Eletrônicos",
      nome: "Teclado Mecânico Led",
      descricao:
        "Teclado Semi Mecânico Led Chroma Rgb Iluminado Jogos Pc Usb retroiluminado",
      price: 118,
      PorcentagemDeDesconto: 51,
      image: "Assets/Produtos/Eletronicos/Teclado/tecladoFt1.jpeg",
      primeiraCor: "Cinza",
    },
    {
      category: "Acessorios",
      nome: "Corrente com pingente",
      descricao: "Corrente Colar de Pingente Cruz Para Homens Mulheres",
      price: 80,
      PorcentagemDeDesconto: 5,
      image: "Assets/Produtos/Acessorios/Corrente/prata.jpeg",
      imageTwo: "Assets/Produtos/Acessorios/Corrente/gold.jpeg",
      primeiraCor: "Silver",
      segundaCor: "Gold",
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
