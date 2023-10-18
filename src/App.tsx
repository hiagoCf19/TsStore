import { GlobalStyles } from "./Styles/LightTheme";
import { ResetCSS } from "./Styles/Reset";
import { Banner } from "./components/Banner/Banner";
import { Bombando } from "./components/Bombando/Bombando";
import { Cadastre } from "./components/Cadastre/Cadastre";
import { Category } from "./components/Category/Categorias";
import { Facilidades } from "./components/Facilidades/Facilidades";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./global.css";
function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <div className="flex flex-col gap-6">
        <Header />
        <Banner />
        <Category />
        <Bombando />
        <Facilidades />
        <Cadastre />
        <Footer />
      </div>
    </>
  );
}

export default App;
