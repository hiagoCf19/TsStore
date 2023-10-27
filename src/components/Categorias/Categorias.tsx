import { category } from "@/routes";

import { Link } from "react-router-dom";
import { TitleGeneric } from "../UiVerse/title";

export const Categorias = () => {
  return (
    <section className="mx-5 flex flex-col relative overflow-auto">
      <TitleGeneric title={"Categorias"} />
      <div className="flex gap-4 sm:gap-10 overflow-hidden overflow-x-scroll sm:overflow-x-hidden sm:flex sm:justify-center py-3">
        {category.map((categoria, i) => (
          <Link
            key={i}
            className="flex-1 sm:flex-initial border border-solid border-roxo p-2 px-6  flex justify-center items-center rounded-lg shadow-md shadow-roxo hover:shadow-lg hover:shadow-roxo bg-[#282828] hover:scale-105 cursor-pointer sm:max-w-[130px] text-muted-foreground font-semibold  hover:text-white "
            to={`/${categoria.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {categoria}
          </Link>
        ))}
      </div>
    </section>
  );
};
