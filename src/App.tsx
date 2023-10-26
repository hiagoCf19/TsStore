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
      <Header
        line={""}
        props={
          <img
            src="Assets/tsStore.svg"
            alt="logo"
            className="sm:w-[120px] w-[50px] sm:mt-1"
          />
        }
      />
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
