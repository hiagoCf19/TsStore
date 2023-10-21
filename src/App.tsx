import { GlobalStyles } from "./Styles/LightTheme";
import { ResetCSS } from "./Styles/Reset";
import { Banner } from "./components/Banner/Banner";
import { Bombando } from "./components/Bombando/Bombando";
import { Cadastre } from "./components/Cadastre/Cadastre";
import { Categorias } from "./components/Categorias/Categorias";
import { Facilidades } from "./components/Facilidades/Facilidades";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Ofertas } from "./components/Ofertas/Ofertas";
import "./global.css";
function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />

      <Header />
      <Banner />
      <div className="flex flex-col gap-10">
        <Categorias />
        <Ofertas />
        <Bombando />
        <Facilidades />
        <Cadastre />
        <Footer />
      </div>
    </>
  );
}

export default App;
