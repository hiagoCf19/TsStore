import { category } from "@/routes";
import { Link } from "react-router-dom";

export const CategoriasDesk = () => {
  return (
    <div className="flex overflow-hidden overflow-x-scroll sm:overflow-x-hidden gap-5 ">
      {/* RENDERIZA UM BOTAO COM ROTAS PARA CADA ITEM DO ARRAY CATEGTORY, QUE ESTÁ NO COMPONENTE ROTAS NO DESKTOP */}
      {category.map((categoria, i) => (
        <Link
          key={i}
          className=" p-2  flex hover:scale-105 cursor-pointer text-white font-semibold  hover:text-roxo "
          to={`/${categoria.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {categoria}
        </Link>
      ))}
    </div>
  );
};
