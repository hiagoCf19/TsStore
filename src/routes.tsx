import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Erro404 from "./components/ERROR/Error404";
import ProdutoCtx, { ProdutosInterface } from "./Context/contextProdutos";
import { ProdutoExibido } from "./components/Novidades/Produto";
import React, { useContext } from "react";
import MudaCorCtx from "./Context/StateColorContext";
import ColorContext from "./Context/ColorContext";
const RoutesApp = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  const cor = useContext(ColorContext);
  const { mudaCor, setMudaCor } = useContext(MudaCorCtx);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {produtos.map((item: ProdutosInterface, i: number) => (
          <React.Fragment key={i}>
            {/* /\s+/ => encontra espaços e ' ', /, - etc. => G global, para que seja feito em toda string  */}
            <Route
              path={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
              element={
                <ProdutoExibido
                  nome={item.nome}
                  descricao={item.descricao}
                  price={item.price}
                  image={`${
                    mudaCor === cor[0]
                      ? item.image
                      : mudaCor === cor[1]
                      ? item.imageTwo
                      : mudaCor === cor[2]
                      ? item.imageThree
                      : setMudaCor(cor[0])
                  }`}
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
