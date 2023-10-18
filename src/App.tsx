import { GlobalStyles } from "./Styles/LightTheme";
import { ResetCSS } from "./Styles/Reset";
import { Banner } from "./components/Banner/Banner";
import { Category } from "./components/Category/Categorias";
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
      </div>
    </>
  );
}

export default App;
