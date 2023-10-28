import { CategoriasDesk } from "../Categorias/CategoriasDesk";
import { SearchStyled } from "../UiVerse/SearchStyled";

export const CoHeader = () => {
  return (
    <div className="hidden sm:block">
      <div className="pt-4 flex  flex-col gap-4 bg-background] px-[220px]">
        <div className="flex ">
          <SearchStyled />
        </div>

        <CategoriasDesk />
      </div>
    </div>
  );
};
