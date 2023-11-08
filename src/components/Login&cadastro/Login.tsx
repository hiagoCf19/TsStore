import { Galaxy } from "@/Styles/Galaxy";
import styled from "styled-components";
import { InputLogin } from "../repetitivos/inputLogin";
import { LogButton } from "../repetitivos/Logbutton";
import { DeskLeft } from "./DesktopLeft";
import { AlertMsg } from "../repetitivos/AlertDialog";
import { useState } from "react";
import { auth, db } from "@/services/firebaseConfing";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { getDocs, query, where, collection } from "firebase/firestore";
const Container = styled.div`
  width: 90%;
  height: 80%;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;

  .card-inner {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.161);
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.978);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 8px;
  }
  .circle {
    width: 200px;
    height: 200px;
    background: radial-gradient(#725cff, #110949);
    border-radius: 50%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
    -webkit-animation: move-up6 2s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  .circle:nth-child(2) {
    bottom: 10px;
    right: 10px;
    animation-name: move-down1;
    -webkit-animation-name: move-down1;
  }

  @keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }
`;

export const LoginCpn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [senhaIncorreta, setSenhaIncorreta] = useState<boolean>(false);
  const [nomeDoUsuario, setNomeDoUsuario] = useState("");

  if (loading) {
    console.log("carregando");
  }
  if (user) {
    const userUID = user.user.uid;
    const userCollection = collection(db, "usuarios");
    const userQuery = query(userCollection, where("uid", "==", userUID));
    getDocs(userQuery)
      .then((res) => {
        if (!res.empty) {
          const userDoc = res.docs[0];
          const userData = userDoc.data();
          const nomeUsuario = userData.name;
          setNomeDoUsuario(nomeUsuario);
          console.log(nomeDoUsuario);
        }
      })
      .catch((error) => {
        console.error("Erro ao consultar o Firestore:", error);
      });
  }
  if (error) {
    console.error(error.code);
  }

  return (
    <>
      <Galaxy />
      <section className="h-[100vh]">
        <div className="flex justify-center items-center h-full">
          <Container className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <div className="flex h-full sm:mx-20 ">
                {/* PARTE  ILUSTRATIVA APENAS DESK */}
                <div className="flex-1 hidden md:block  h-full scale-125 ">
                  <DeskLeft />
                </div>
                {/* PARTE DOS INPUTS */}
                <div className="flex-1 flex justify-center ">
                  <div className="  flex flex-col gap-5 h-full justify-center sm:scale-[1.25]">
                    <div className="w-full flex items-center justify-center">
                      <img
                        src="Assets/tsStore.svg"
                        alt=""
                        className="w-[200px] sm:hidden "
                      />
                    </div>
                    {/* mensagem de boas vindas mobile */}
                    <h1 className=" text-center text-[20px] sm:hidden">
                      Seja bem-vindo
                    </h1>
                    <h1 className=" text-center text-[26px] hidden sm:block sm:ml-20">
                      LOGIN
                    </h1>
                    {/* inputs */}

                    <div className="flex flex-col gap-5 ">
                      <InputLogin
                        type="email"
                        value={email}
                        placeholder="User"
                        onch={(e: any) => {
                          setEmail(e.target.value);
                        }}
                      >
                        Digite seu e-mail
                      </InputLogin>
                      <InputLogin
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onch={(e: any) => setPassword(e.target.value)}
                      >
                        Digite sua senha
                      </InputLogin>
                      <span
                        className={`text-[#D80032] ${
                          senhaIncorreta === true ? "" : "hidden"
                        } `}
                      >
                        login ou senha inválidos
                      </span>
                      {`o nome do user é: ${nomeDoUsuario}`}
                    </div>
                    <div className="flex flex-col py-5 gap-3 sm:w-[130%] text-center">
                      {/* Botão de entrar com mensagem */}
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          signInWithEmailAndPassword(email, password);
                          error
                            ? setSenhaIncorreta(true)
                            : setSenhaIncorreta(false);
                        }}
                      >
                        <LogButton content={"Entrar"} type="submit" />
                      </div>

                      {/* BOTÃO DE CADASTRO COM MENSAGEM */}
                      <AlertMsg
                        botao={
                          <LogButton content={"Cadastre-se"} type="button" />
                        }
                        title="Cadastre-se"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
