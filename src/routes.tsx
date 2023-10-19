import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Erro404 from "./components/ERROR/Error404";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
