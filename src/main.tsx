import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes.tsx";
import { ProdutoProvider } from "./Context/contextProdutos.tsx";
import { ColorProvider } from "./Context/ColorContext.tsx";
import { MudaCorProvider } from "./Context/StateColorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProdutoProvider>
      <ColorProvider>
        <MudaCorProvider>
          <RoutesApp />
        </MudaCorProvider>
      </ColorProvider>
    </ProdutoProvider>
  </React.StrictMode>
);
