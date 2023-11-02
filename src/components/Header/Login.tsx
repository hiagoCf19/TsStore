import { Galaxy } from "@/Styles/Galaxy";
import styled from "styled-components";
import { InputLogin } from "../repetitivos/inputLogin";

import { LogButton } from "../repetitivos/Logbutton";

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
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.978);
    backdrop-filter: blur(5px);
    border-radius: 8px;
  }
  .circle {
    width: 200px;
    height: 200px;
    background: radial-gradient(#725cff, #110949);
    border-radius: 50%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  .circle:nth-child(2) {
    bottom: 10px;
    right: 10px;
    animation-name: move-down1;
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
  return (
    <>
      <Galaxy />
      <section className="h-[100vh]">
        <div className="flex justify-center items-center h-full">
          <Container className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <div className="flex h-full sm:p-7 gap-4">
                <div className="w-[55%] hidden sm:block border border-solid border-roxo"></div>
                <div className="flex-1 flex flex-col items-center justify-center py-5   gap-8 ">
                  <div className="  flex flex-col gap-5 h-full justify-center sm:scale-[1.20]">
                    <div className="w-full flex items-center justify-center">
                      <img
                        src="Assets/tsStore.svg"
                        alt=""
                        className="w-[200px] "
                      />
                    </div>
                    {/* mensagem de boas vindas mobile */}
                    <h1 className=" text-center text-[20px] sm:hidden">
                      Seja bem vindo
                    </h1>
                    {/* inputs */}
                    <div className="flex flex-col gap-5 ">
                      <InputLogin type="input" placeholder="User">
                        Digite seu usuário
                      </InputLogin>
                      <InputLogin type="password" placeholder="Senha">
                        Digite sua senha
                      </InputLogin>
                    </div>
                    <div className="flex flex-col py-5 gap-3">
                      <LogButton content={"Entrar"} />
                      <LogButton content={"Cadastre-se"} />
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
