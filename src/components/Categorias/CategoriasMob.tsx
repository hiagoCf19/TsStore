import { category } from "@/routes";
import { Link } from "react-router-dom";
import { TitleGeneric } from "../UiVerse/title";

export const CategoriasMob = () => {
  return (
    <section className=" flex flex-col relative overflow-auto sm:hidden mx-5 w-[95%]">
      <TitleGeneric title="Categorias" />
      <div className="flex gap-4  overflow-hidden overflow-x-scroll  pt-3 py-3">
        {/* RENDERIZA UM BOTAO COM ROTAS PARA CADA ITEM DO ARRAY CATEGTORY, QUE ESTÁ NO COMPONENTE ROTAS NO MOBILE */}
        {category.map((categoria, i) => (
          <Link
            key={i}
            className="flex-1  border border-solid border-roxo  px-6 py-2  flex justify-center items-center rounded-lg shadow-md shadow-roxo hover:shadow-lg hover:shadow-roxo bg-[#343232] hover:scale-105 cursor-pointer text-muted-foreground font-semibold  hover:text-white "
            to={`/${categoria.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {categoria}
          </Link>
        ))}
      </div>
    </section>
  );
};
