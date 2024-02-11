import { BotaoStyled } from "../styledElements/BotaoStyled";
import { Link } from "react-router-dom";

export const Cadastre = () => {
  return (
    <section
      className={` mx-5 sm:mx-[6.25rem] sm:flex sm:justify-center bg-transp2 `}
    >
      <div className="flex flex-col  gap-6 border border-solid border-roxo p-5 sm:w-[45rem] items-center rounded-lg ">
        <p className="text-center font-normal text-base text-[#a7a7a7] sm:text-lg">
          Quer receber nossas novidades, promoções exclusivas e 15% OFF na
          primeira compra? Cadastre-se
        </p>
        <Link to={"/login"}>
          <BotaoStyled content="Cadastrar" />
        </Link>
      </div>
    </section>
  );
};
