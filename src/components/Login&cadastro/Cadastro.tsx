import { useState } from "react";
import { LogButtonSM } from "../repetitivos/LogbuttonSM";
import { Input } from "../ui/input";

export const CadastroForm = () => {
  const [name, setName] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviou dados...");
      }}
      className="flex justify-center flex-col items-center gap-3"
    >
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Nome">Nome</label>
        <Input
          placeholder="Informe seu nome"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={name}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">E-mail</label>
        <Input
          placeholder="informe seu e-mail"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">Senha</label>
        <Input
          placeholder="Defina uma senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Confirme sua senha">Confirme sua senha</label>
        <Input
          placeholder="Confirme sua senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
        />
      </div>
      <div className="py-5">
        <LogButtonSM content="Cadastrar" />
      </div>
    </form>
  );
};
