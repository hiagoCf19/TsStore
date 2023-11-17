import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes.tsx";
import { ProdutoProvider } from "./Context/contextProdutos.tsx";
import { MudaCorProvider } from "./Context/StateColorContext.tsx";
import { UserProvider } from "./Context/UserCOntext.tsx";
import { LogadoProvider } from "./Context/loginControl.tsx";
import { CarrinhoProvider } from "./Context/contextCar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LogadoProvider>
      <CarrinhoProvider>
        <UserProvider>
          <ProdutoProvider>
            <MudaCorProvider>
              <RoutesApp />
            </MudaCorProvider>
          </ProdutoProvider>
        </UserProvider>
      </CarrinhoProvider>
    </LogadoProvider>
  </React.StrictMode>
);
