import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Erro404 from "./components/ERROR/Error404";
import { ProdutoProvider } from "./Context/contextProdutos";

const RoutesApp = () => {
  return (
    <ProdutoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>
    </ProdutoProvider>
  );
};
export default RoutesApp;
