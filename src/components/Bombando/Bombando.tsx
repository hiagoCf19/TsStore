interface Produtos {
  nome: string;
  descricao: string;
  price: number;
  image: string;
}
const produtos: Produtos[] = [
  {
    nome: "Camiseta Conforto",
    descricao:
      "Multicores e tamanhos. Tecido de algodão 100% Modelagem unissex.",
    price: 70,
    image: "Assets/Mobile/Imagens cards/Cconforto.png",
  },
  {
    nome: "Calça Alfaiataria",
    descricao: "Modelo Wide Leg alfaiataria em linho. Uma peça pra a vida toda",
    price: 180,
    image: "Assets/Mobile/Imagens cards/Card calça.png",
  },
  {
    nome: "Tênis Chunky",
    descricao:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex",
    price: 250,
    image: "Assets/Mobile/Imagens cards/Card tenis.png",
  },
  {
    nome: "Jaqueta Jeans",
    descricao:
      "Modelo unissex oversized gola de camurça. Atemporal e autêntica. ",
    price: 150,
    image: "Assets/Mobile/Imagens cards/jaqueta.png",
  },
  {
    nome: "Óculos Redondo",
    descricao: "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: 120,
    image: "Assets/Mobile/Imagens cards/oculos.png",
  },
  {
    nome: "Bolsa Coringa",
    descricao:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: 120,
    image: "Assets/Mobile/Imagens cards/bolsa.png",
  },
];

export const Bombando: React.FC = () => {
  return (
    <section className="mx-8 sm:mx-[100px]">
      <div className="flex flex-col  gap-8">
        <h1 className=" font-medium text-[1.75rem] text-center flex justify-center">
          Produtos que estão bombando!
        </h1>
        <div className=" flex flex-col sm:flex-row w-full sm:flex-wrap sm:justify-center gap-8">
          {produtos.map((produto: Produtos, i: number) => (
            <div
              className=" flex flex-col gap-5 border-b-[1px] border-x-[1px] border-dotted border-[#a7a7a7] sm:w-[350px] "
              key={i}
            >
              <img
                src={produto.image}
                alt="card"
                className="w-full h-[25rem] rounded-md"
              />
              <div className="flex flex-col gap-4 px-3 ">
                <p className="text-[20px] font-bold">{produto.nome}</p>
                <span className=" font-normal text-[16px] text-justify leading-6 text-[#404040] ">
                  {produto.descricao}
                </span>
                <p className="text-[20px] font-bold">{`R$ ${produto.price.toFixed(
                  2
                )}`}</p>
              </div>
              <button className="w-[102px] h-[37px] mx-5 bg-[#9353FF] hover:bg-[#6b3bbc] text-white font-semibold text-[16px] flex items-center justify-center mb-4">
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
