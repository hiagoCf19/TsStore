import React, { ChangeEvent, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { app } from "@/services/firebaseConfing";

import { Galaxy } from "@/Styles/Galaxy";
import { InputLogin } from "../styledElements/inputLogin";
import { BotaoStyled } from "../styledElements/BotaoStyled";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const firebase = app;
  const auth = getAuth(firebase);
  const [email, setEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const resetSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetEmailSent(true);
        setError(null);
      })
      .catch((error) => {
        setResetEmailSent(false);
        setError(
          error.message === "Firebase: Error (auth/missing-email)."
            ? "Insira seu e-mail cadastrado"
            : error.message === "Firebase: Error (auth/invalid-email)."
            ? "E-mail inválido"
            : error.message
        );
      });
  };
  return (
    <React.Fragment>
      <Galaxy />

      <section className="justify-center items-center h-[100vh] flex flex-col gap-8">
        <div className="flex flex-col  bg-transp p-10 h-[35%] w-[90%] sm:w-[30%] rounded-lg shadow-xl shadow-roxo gap-5 items-center justify-center">
          <h2 className="text-center uppercase font-bold mb-5">
            Recuperação de Senha
          </h2>
          <div className="flex w-full">
            <InputLogin
              type="email"
              value={email}
              placeholder="e-mail"
              onch={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            >
              Insira seu e-mail
            </InputLogin>
          </div>
          <div
            onClick={resetSenha}
            className="flex justify-center items-center"
          >
            <BotaoStyled content={"Enviar"} />
          </div>

          {resetEmailSent && (
            <div className=" text-[#43d33b]">
              E-mail de recuperação enviado com sucesso. Redefina sua senha e
              <Link to={"/login"}>
                {" "}
                faça <strong className="underline ">Login</strong>
              </Link>
            </div>
          )}
          {error && <p className="text-center text-[#D80032]">{error}</p>}
        </div>
      </section>
    </React.Fragment>
  );
};
