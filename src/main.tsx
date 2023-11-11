import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes.tsx";
import { ProdutoProvider } from "./Context/contextProdutos.tsx";
import { MudaCorProvider } from "./Context/StateColorContext.tsx";
import { UserProvider } from "./Context/UserCOntext.tsx";
import { LogadoProvider } from "./Context/loginControl.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LogadoProvider>
      <UserProvider>
        <ProdutoProvider>
          <MudaCorProvider>
            <RoutesApp />
          </MudaCorProvider>
        </ProdutoProvider>
      </UserProvider>
    </LogadoProvider>
  </React.StrictMode>
);
