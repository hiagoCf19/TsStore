import { Banner } from "./components/Banner/Banner";
import { Bombando } from "./components/Novidades/Populares";
import { Cadastre } from "./components/Cadastre/Cadastre";
import { CategoriasMob } from "./components/Categorias/CategoriasMob";
import { Facilidades } from "./components/Facilidades/Facilidades";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Preview } from "./components/Ofertas/preview";
import "./global.css";
import { CoHeader } from "./components/Header/CoHeader";

function App() {
  return (
    <>
      <div className="fixed bg-background w-full z-50">
        <Header
          line={""}
          props={
            <div className="sm:bg-background px-2 sm:h-10 flex items-center justify-between w-full">
              <img
                src="Assets/tsStoreMobile.svg"
                alt="logo"
                className=" w-[90px] sm:w-[110px] "
              />
            </div>
          }
        />
        <CoHeader />
      </div>
      <div className="sm:h-[15vh] h-[10vh] w-full mb-4"></div>
      <div className="flex flex-col gap-10">
        <Banner />
        <Preview />
        <CategoriasMob />
        <Bombando />
        <Facilidades />
        <Cadastre />
        <Footer />
      </div>
    </>
  );
}

export default App;
