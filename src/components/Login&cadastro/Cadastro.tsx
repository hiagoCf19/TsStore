import { useState } from "react";
import { LogButtonSM } from "../repetitivos/LogbuttonSM";
import { Input } from "../ui/input";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebaseConfing";

export const CadastroForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [confirmPass, setConfirm] = useState<string>("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  function cadastro(e: any) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={cadastro}
      className="flex justify-center flex-col items-center gap-3"
    >
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Nome">Nome</label>
        <Input
          placeholder="Informe seu nome"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">E-mail</label>
        <Input
          placeholder="informe seu e-mail"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">Senha</label>
        <Input
          placeholder="Defina uma senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Confirme sua senha">Confirme sua senha</label>
        <Input
          placeholder="Confirme sua senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={confirmPass}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>
      <div className="py-5">
        <LogButtonSM type="submit" content="Cadastrar" />
      </div>
    </form>
  );
};
