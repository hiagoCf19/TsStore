import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Erro404 from "./components/ERROR/Error404";
import ProdutoCtx, { ProdutosInterface } from "./Context/contextProdutos";
import React, { useContext } from "react";
import { ProdutoExibido } from "./components/Bombando/Produto";

const RoutesApp = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {produtos.map((item: ProdutosInterface, i: number) => (
          <React.Fragment key={i}>
            <Route
              path={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
              element={
                <ProdutoExibido
                  nome={item.nome}
                  descricao={item.descricao}
                  price={item.price}
                  image={item.image}
                />
              }
            />
          </React.Fragment>
        ))}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
