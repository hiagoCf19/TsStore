import { Banner } from "./components/Banner/Banner";
import { Bombando } from "./components/Populares/Populares";
import { Cadastre } from "./components/e-mail/EmailDesconto";
import { CategoriasMob } from "./components/Categorias/CategoriasMob";
import { Facilidades } from "./components/Facilidades/Facilidades";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Preview } from "./components/Ofertas/preview";
import "./global.css";

import { useContext } from "react";
import ControlLog from "./Context/loginControl";
import { Galaxy } from "./Styles/Galaxy";
function App() {
  const { userLogado } = useContext(ControlLog);
  console.log(userLogado);

  return (
    <>
      <Galaxy />
      <div className="fixed bg-transp2 w-full z-50">
        <Header
          line={""}
          props={
            <div className=" px-2 sm:h-10 flex items-center justify-between w-full">
              <img
                src="Assets/tsStore.svg"
                alt="logo"
                className=" w-[90px] sm:w-[110px] "
              />
            </div>
          }
        />
      </div>
      <div className="sm:h-[4vh] h-[8vh] w-full mb-4"></div>
      <div className="flex flex-col gap-10 sm:gap-20 justify-center items-center">
        <Banner />
        <Preview />
        <CategoriasMob />
        <Bombando />
        <Facilidades />
        {userLogado ? null : <Cadastre />}

        <Footer />
      </div>
    </>
  );
}

export default App;
