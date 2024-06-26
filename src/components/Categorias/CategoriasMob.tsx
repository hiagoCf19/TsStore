import { category } from "@/routes";
import { Link } from "react-router-dom";
import { TitleGeneric } from "../styledElements/title";

export const CategoriasMob = () => {
  return (
    <section className=" flex flex-col relative overflow-auto sm:hidden w-[95%] [&::-webkit-scrollbar]:hidden">
      <TitleGeneric title="Categorias" />
      <div className="flex gap-4  overflow-w-scroll  pt-3 py-3">
        {/* RENDERIZA UM BOTAO COM ROTAS PARA CADA ITEM DO ARRAY CATEGTORY, QUE ESTÁ NO COMPONENTE ROTAS NO MOBILE */}
        {category.map((categoria, i) => (
          <Link
            key={i}
            className="flex-1  border border-solid border-roxo  px-6 py-2  flex justify-center items-center rounded-[4px] hover:shadow-md hover:shadow-roxo bg-background hover:scale-105 cursor-pointer text-muted-foreground font-semibold  hover:text-white "
            to={`/${categoria.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {categoria}
          </Link>
        ))}
      </div>
    </section>
  );
};
