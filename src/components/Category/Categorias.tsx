import React from "react";

interface Roupas {
  nome: string;
  image: string;
}
const roupas: Roupas[] = [
  {
    nome: "Camisetas",
    image: "Assets/Mobile/Categorias/CamisetaMb.png",
  },
  {
    nome: "Bolsas",
    image: "Assets/Mobile/Categorias/Categoria Bolsas.png",
  },
  {
    nome: "Calçados",
    image: "Assets/Mobile/Categorias/Categoria calçados.png",
  },
  {
    nome: "Calças",
    image: "Assets/Mobile/Categorias/Categoria calças.png",
  },
  {
    nome: "Casacos",
    image: "Assets/Mobile/Categorias/Categoria Casacos.png",
  },
  {
    nome: "Óculos",
    image: "Assets/Mobile/Categorias/Categoria óculos.png",
  },
];
export const Category: React.FC = () => {
  return (
    <>
      <section className="flex mx-8">
        <div className="flex flex-col gap-5 w-full">
          <h1 className=" font-medium text-[1.75rem] text-center flex justify-center ">
            Busque por categoria:
          </h1>
          <div className="flex flex-wrap gap-6">
            {roupas.map((item: Roupas, i: number) => (
              <div className="w-[146px] h-[192px] flex flex-col" key={i}>
                <img src={item.image} alt={item.nome} />
                <div className="bg-primary h-full text-[#FFF] flex justify-center items-center text-lg font-medium">
                  {item.nome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
