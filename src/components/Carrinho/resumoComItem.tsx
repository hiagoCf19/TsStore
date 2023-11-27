import { Ticket } from "lucide-react";
import { LogButton } from "../styledElements/Logbutton";
import CarCtx from "@/Context/contextCar";
import { useContext } from "react";
import { ProdutosInterface } from "@/Context/contextProdutos";
import { Link } from "react-router-dom";
interface PropsRoute {
  rotaDoContinue: string;
}
export const ResumoComItem = ({ rotaDoContinue }: PropsRoute) => {
  const { car } = useContext(CarCtx);
  const precoSomado = car.map((produto: ProdutosInterface) => {
    return produto.finalPrice != undefined
      ? produto.finalPrice * produto.quantidade
      : null;
  });
  const valor = precoSomado.reduce(
    (total: number, preco: number) => total + preco,
    0
  );
  const descontoPIX = valor - (valor / 100) * 10;

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
            <p>Produtos ({car.length})</p>
            <p>R$ {valor.toFixed(2).replace(".", ",")}</p>
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
            <span>R$ {valor.toFixed(2).replace(".", ",")} </span>
          </div>
          <span className="flex justify-end text-[12px] text-roxo mt-[-6px]">
            ou R$ {descontoPIX.toFixed(2).replace(".", ",")} no Pix
          </span>
        </div>
      </div>
      <Link to={rotaDoContinue} className="flex justify-center py-5">
        <LogButton content="Continuar " type="button" />
      </Link>
    </div>
  );
};
