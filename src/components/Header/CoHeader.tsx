import { CategoriasDesk } from "../Categorias/CategoryDesk";

export const CoHeader = () => {
  return (
    <div className="hidden sm:block">
      <div className="pt-4 flex  flex-col gap-4  px-[80px]">
        <CategoriasDesk />
      </div>
    </div>
  );
};
