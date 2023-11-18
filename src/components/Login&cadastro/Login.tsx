{
  /* STYLED COMPONENTS CONTAINER */
}
export const Container = styled.div`
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
{
  /* IMPORTAÇÕES */
}
import { Galaxy } from "@/Styles/Galaxy";
import styled from "styled-components";
import { InputLogin } from "../styledElements/inputLogin";
import { LogButton } from "../styledElements/Logbutton";
import { DeskLeft } from "./DesktopLeft";
import { AlertMsg } from "../styledElements/AlertDialog";
import { ChangeEvent, useContext, useState } from "react";
import { auth, db } from "@/services/firebaseConfing";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getDocs, query, where, collection } from "firebase/firestore";
import UserCtx from "@/Context/UserCOntext";
import { Link, useNavigate } from "react-router-dom";
import ControlLog from "@/Context/loginControl";

{
  /* COMPONENTE */
}
export const LoginCpn = () => {
  {
    /* STATES */
  }
  const { setUserLogado } = useContext(ControlLog);
  const { nomeDoUsuario, setNomeDoUsuario } = useContext(UserCtx);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  {
    /* O QUE ACONTECE ENQUANTO CARREGA: */
  }
  if (loading) {
    console.log("carregando");
  }
  {
    /* O QUE ACONTECE QUANDO O LOGIN É BEM SUCEDIDO: */
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
          sessionStorage.setItem("userUid", userUID);

          setNomeDoUsuario(nomeUsuario);

          nomeDoUsuario != null ? setUserLogado(true) : null;
        }
      })
      .catch((error) => {
        console.error("Erro ao consultar os dados:", error);
      });

    console.log(nomeDoUsuario);
    navigate("/");
  }

  return (
    <>
      <Galaxy />
      <section className="h-[100vh]">
        <div className="flex justify-center items-center h-full">
          {/* CONTAINER QUE CONTEM A ANIMAÇÃO DE FUNDO */}
          <Container className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <div className="flex h-full sm:mx-20 ">
                {/* PARTE  ILUSTRATIVA APENAS DESK */}
                <div className="flex-1 hidden md:block  h-full scale-125 ">
                  <DeskLeft />
                </div>
                {/* PARTE FUNCIONAL, CADASTRO/LOGIN */}
                <div className="flex-1 flex justify-center ">
                  <div className="  flex flex-col gap-5 h-full justify-center w-[300px] scale-125">
                    {/* LOGO */}
                    <div className="w-full flex items-center justify-center">
                      <img
                        src="Assets/tsStore.svg"
                        alt=""
                        className="w-[200px] sm:hidden "
                      />
                    </div>
                    {/* WELCOME IN MOBILE */}
                    <h1 className=" text-center text-[20px] sm:hidden">
                      Seja bem-vindo
                    </h1>
                    {/* WELCOME IN DESK */}
                    <h1 className=" text-center text-[26px] hidden sm:block sm:ml-20">
                      LOGIN
                    </h1>
                    {/* INPUTS */}
                    <div className="flex flex-col gap-5 ">
                      {/* EMAIL */}
                      <InputLogin
                        type="email"
                        value={email}
                        placeholder="User"
                        onch={(e: ChangeEvent<HTMLInputElement>) => {
                          setEmail(e.target.value);
                        }}
                      >
                        Digite seu e-mail
                      </InputLogin>
                      {/* SENHA */}
                      <InputLogin
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onch={(e: ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.target.value)
                        }
                      >
                        Digite sua senha
                      </InputLogin>
                      {/* RECUPERAÇÃO DE SENHA */}
                      <Link
                        to={"/login/recuperar-acesso"}
                        className="text-sm underline text-[#a1a1a1e1] hover:text-roxo"
                      >
                        Esqueceu sua senha?
                      </Link>
                      {/* TRATAMENTO DE ERROS RELACIONADOS AO LOGIN */}
                      <span
                        className={`text-[#D80032] w-[300px] ${
                          error ? "" : "hidden"
                        } `}
                      >
                        {error?.message ===
                        "Firebase: Error (auth/invalid-email)."
                          ? "Email inváido"
                          : error?.message ===
                              "Firebase: Error (auth/missing-password)." ||
                            error?.message ===
                              "Firebase: Error (auth/invalid-login-credentials)."
                          ? "Usuário ou senha Inválidos"
                          : error?.message ===
                            "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
                          ? "Acesso bloqueado. Tente novamente mais tarde ou restaure sua senha "
                          : error?.message}
                      </span>
                    </div>
                    {/* ÁREA DE LOGIN E CADASTRO*/}
                    <div className="flex flex-col py-5 gap-3 sm:w-[130%] text-center">
                      {/*BOTÃO COM LÓGICA PARA REALIZAR O LOGIN */}
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          signInWithEmailAndPassword(email, password);
                        }}
                      >
                        <LogButton content={"Entrar"} type="submit" />
                      </div>
                      {/* BOTÃO DE REDIRECIONAMENTO PARA FORMULARIO DE CADASTRO */}
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
