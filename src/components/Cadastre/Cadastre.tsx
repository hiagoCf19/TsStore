import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Cadastre = () => {
  return (
    <section className="mx-8 sm:mx-[100px]">
      <div className="flex flex-col  gap-6 border border-solid p-5">
        <p className="text-center">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se
        </p>
        <div className="flex">
          <Input
            placeholder="Digite seu e-mail"
            type="text"
            className="border border-solid border-black w-[200px]"
          />
          <Button>Enviar</Button>
        </div>
      </div>
    </section>
  );
};
