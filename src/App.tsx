import { GlobalStyles } from "./Styles/LightTheme";
import { ResetCSS } from "./Styles/Reset";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import "./global.css";
function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <Header />
      <Banner />
    </>
  );
}

export default App;
