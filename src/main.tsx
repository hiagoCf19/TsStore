import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes.tsx";
import { ProdutoProvider } from "./Context/contextProdutos.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProdutoProvider>
      <RoutesApp />
    </ProdutoProvider>
  </React.StrictMode>
);
