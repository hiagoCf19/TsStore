import { Ticket } from "lucide-react";
import { LogButton } from "../styledElements/Logbutton";

export const ResumoComItem = () => {
  return (
    <div
      className={` sm:w-[25%] bg-transp overflow-w-hidden overflow-y-scroll rounded-lg h-min  `}
    >
      <h1 className="p-4 text-lg font-semibold border-b border-solid border-roxo hidden sm:block">
        Resumo do pedido
      </h1>
      <div className={`  sm:p-4 p-2`}>
        <div className="flex flex-col sm:gap-4 gap-2 text-sm sm:text-[16px]">
          <div className="flex justify-between">
            <p>Produtos (2)</p>
            <p>price</p>
          </div>
          <div className="flex justify-between">
            <p>Frete</p>
            <p className="text-roxo">Gratis</p>
          </div>
          <div className="flex items-center gap-3">
            <Ticket />
            <span className="text-roxo">Inserir cupom de desconto</span>
          </div>
          <div className="flex justify-between">
            <p> Total</p>
            <span> price</span>
          </div>
          <span className="flex justify-end text-[12px] text-roxo mt-[-6px]">
            ou R$ XX,XX no Pix
          </span>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <LogButton content="Continuar a compra" type="button" />
      </div>
    </div>
  );
};
