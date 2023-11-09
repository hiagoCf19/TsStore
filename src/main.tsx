import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes.tsx";
import { ProdutoProvider } from "./Context/contextProdutos.tsx";
import { MudaCorProvider } from "./Context/StateColorContext.tsx";
import { UserProvider } from "./Context/UserCOntext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ProdutoProvider>
        <MudaCorProvider>
          <RoutesApp />
        </MudaCorProvider>
      </ProdutoProvider>
    </UserProvider>
  </React.StrictMode>
);
