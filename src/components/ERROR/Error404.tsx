import { BackGrad } from "@/Styles/Background";
import React from "react";
import { Link } from "react-router-dom";

const Erro404: React.FC = () => {
  return (
    <BackGrad>
      <div className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Erro 404 - Página não encontrada
        </h1>
        <p className="text-lg text-white">
          A página que você está procurando não existe.
        </p>
        <p className="text-lg text-white">
          Por favor, verifique o URL ou então
          <Link to={"/"} className="text-roxo">
            retorne à página inicial
          </Link>
          .
        </p>
      </div>
    </BackGrad>
  );
};

export default Erro404;
