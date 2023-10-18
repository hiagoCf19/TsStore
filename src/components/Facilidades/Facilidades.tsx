import { MdPix } from "react-icons/md";
import { Topico } from "./Topicos";
import { MdForest } from "react-icons/md";
import { RiReplay30Fill } from "react-icons/ri";
export const Facilidades: React.FC = () => {
  return (
    <section className="bg-primary">
      <div className="flex flex-col gap-8 py-8">
        <h1 className=" font-medium text-[1.5rem] text-center flex justify-center text-[#FFF]">
          Conheça todas as nossas Facilidades
        </h1>
        <div className="flex flex-col gap-12 h-[301px]">
          <Topico
            title={"PAGUE PELO PIX"}
            text={"Ganhe 10% OFF em pagamentos realizados via pix"}
            icon={MdPix}
          />
          <Topico
            title={"TROCA GRÁTIS"}
            text={"Fique livre para trocar seus produtos em até 30 dias"}
            icon={RiReplay30Fill}
          />
          <Topico
            title={"SUSTENTABILIDADE"}
            text={"Moda responsável, que respeita o meio ambiente"}
            icon={MdForest}
          />
        </div>
      </div>
    </section>
  );
};
