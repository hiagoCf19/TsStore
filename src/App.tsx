import { ResetCSS } from "./Styles/Reset";
import { Banner } from "./components/Banner/Banner";
import { Bombando } from "./components/Novidades/Populares";
import { Cadastre } from "./components/Cadastre/Cadastre";
import { Categorias } from "./components/Categorias/Categorias";
import { Facilidades } from "./components/Facilidades/Facilidades";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Preview } from "./components/Ofertas/preview";
import "./global.css";
function App() {
  return (
    <>
      <ResetCSS />
      <Header />

      <div className="flex flex-col gap-10">
        <Banner />
        <Preview />
        <Categorias />
        <Bombando />
        <Facilidades />
        <Cadastre />
        <Footer />
      </div>
    </>
  );
}

export default App;
