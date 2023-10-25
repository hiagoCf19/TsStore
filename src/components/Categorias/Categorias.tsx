import ProdutoCtx from "@/Context/contextProdutos";
import { useContext } from "react";

export const Categorias = () => {
  const produtos = useContext(ProdutoCtx);
  const category: string[] = [];

  for (let i = 0; i < produtos.length; i++) {
    const categoria = produtos[i].category;
    !category.includes(categoria) ? category.push(categoria) : null;
  }

  return (
    <section className="mx-5 flex gap-4 flex-col">
      <h1 className=" uppercase -tracking-tighter font-semibold">Categorias</h1>
      <div className="flex flex-wrap gap-8 mx-2">
        {category.map((categoria: string, i: number) => (
          <div
            key={i}
            className="border border-solid border-roxo p-2 px-6 w-[100px] flex justify-center items-center rounded-lg shadow-md shadow-roxo hover:shadow-lg hover:shadow-roxo bg-[#282828] hover:scale-105 cursor-pointer"
            onClick={() => console.log(categoria)}
          >
            <p className="text-muted-foreground font-semibold hover:text-white">
              {categoria}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
