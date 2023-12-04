import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Erro404 from "./components/ERROR/Error404";
import ProdutoCtx, { ProdutosInterface } from "./Context/contextProdutos";
import MudaCorCtx from "./Context/VariacaoContext";

import { AllCategorys } from "./components/Categorias/OpenCategory";
import { ProdutoExibido } from "./components/OpenProduct/Produto";
import { ResetCSS } from "./Styles/Reset";

import { LoginCpn } from "./components/Login&cadastro/Login";

import { ResetPassword } from "./components/Login&cadastro/resetPassword";
import { Carrinho } from "./components/Carrinho/carrinho";
import { Trocas } from "./components/trocas/Trocas";

import { VisualizaEnd } from "./components/Carrinho/Etapa2/Endereco/HomeAdress";
import { Endereco } from "./components/Carrinho/Etapa2/EditarAdress/Endereco";
import { HomePay } from "./components/Carrinho/pagamento/homePay";
import { LayoutGenerico } from "./components/Ofertas/GenericExib";

export const category: string[] = [];
export const navRoutes = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/todas-as-nossas-ofertas",
    title: "Promoções",
  },
  {
    link: "/todos-os-populares-do-momento",
    title: "Populares",
  },
];

const RoutesApp = () => {
  const produtos = useContext<ProdutosInterface[]>(ProdutoCtx);
  const { mudaCor }: any = useContext(MudaCorCtx);
  const ofertas = produtos.filter((oft) => {
    return oft.PorcentagemDeDesconto > 1;
  });

  for (let i = 0; i < produtos.length; i++) {
    const categoria = produtos[i].category;
    !category.includes(categoria) ? category.push(categoria) : null;
  }
  return (
    <BrowserRouter>
      <ResetCSS />
      <Routes>
        <Route path="/" element={<App />} />

        {produtos.map((item: ProdutosInterface, i: number) => (
          <React.Fragment key={i}>
            {/* /\s+/ => encontra espaços : ' ', /, - etc. => G global, para que seja feito em toda string  */}
            <Route
              path={`/${item.nome.replace(/\s+/g, "-").toLowerCase()}`}
              element={
                <ProdutoExibido
                  id={item.id}
                  nome={item.nome}
                  descricao={item.descricao}
                  price={item.price}
                  primeiraCor={item.primeiraCor}
                  segundaCor={item.segundaCor}
                  terceiraCor={item.terceiraCor}
                  category={item.category}
                  PorcentagemDeDesconto={item.PorcentagemDeDesconto}
                  finalPrice={item.finalPrice}
                  quantidade={item.quantidade}
                  destiny={item.destiny}
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

        <Route
          path="/todas-as-nossas-ofertas"
          element={
            <LayoutGenerico
              title={"Confira nossas ofertas"}
              diferenciador={ofertas}
            />
          }
        />
        <Route
          path="/todos-os-populares-do-momento"
          element={
            <LayoutGenerico title="Populares" diferenciador={produtos} />
          }
        />
        {category.map((route, i) => (
          <Route
            path={`/${route.replace(/\s+/g, "-").toLowerCase()}`}
            element={<AllCategorys propsCategory={route} />}
            key={i}
          />
        ))}

        <Route path="/login" element={<LoginCpn />} />
        <Route path="/login/recuperar-acesso" element={<ResetPassword />} />
        <Route path="/meu-carrinho" element={<Carrinho />} />
        <Route path="/minhas-trocas" element={<Trocas />} />
        <Route path="/endereco-para-entrega" element={<VisualizaEnd />} />
        <Route path="/cadastre-seu-endereco" element={<Endereco />} />
        <Route path="/metodos-de-pagamento" element={<HomePay />} />
        <Route
          path="/produtos-com-frete-gratis"
          element={
            <LayoutGenerico
              title="Aproveite o frete Gratis"
              diferenciador={produtos}
            />
          }
        />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
