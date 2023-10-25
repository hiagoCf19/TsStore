import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Erro404 from "./components/ERROR/Error404";
import ProdutoCtx, { ProdutosInterface } from "./Context/contextProdutos";
import { ProdutoExibido } from "./components/Novidades/Produto";
import React, { useContext } from "react";
import MudaCorCtx from "./Context/StateColorContext";
import { AllOferts } from "./components/Ofertas/AllOferts";
export const navRoutes = [
  {
    component: <App />,
    link: "/",
    title: "Home",
  },
  {
    component: <AllOferts />,
    link: "/todas-as-nossas-ofertas",
    title: "Promoções",
  },
];
const RoutesApp = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);

  const { mudaCor }: any = useContext(MudaCorCtx);

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
                  primeiraCor={item.primeiraCor}
                  segundaCor={item.segundaCor}
                  terceiraCor={item.terceiraCor}
                  category={item.category}
                  image={`${
                    mudaCor === item.primeiraCor
                      ? item.image
                      : mudaCor === item.segundaCor
                      ? item.imageTwo
                      : mudaCor === item.terceiraCor
                      ? item.imageThree
                      : ""
                  }`}
                />
              }
            />
          </React.Fragment>
        ))}
        <Route path="*" element={<Erro404 />} />
        {navRoutes.map((route) => (
          <Route path={route.link} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
