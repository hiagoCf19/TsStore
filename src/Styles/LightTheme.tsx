import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
  --bg: #f5f5f5;
  --gray: #CCCCCC;
  --third: #DAFF01;
  --secondary: #9353FF;
  --coral: #EE6471;
  --meteora: #f87f46;
}
body{
    font-family: 'Inter', sans-serif;;
    box-sizing: border-box ;
    height: 100%;
    background-color: var(--bg)
     }
`;
