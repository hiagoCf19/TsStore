import { createGlobalStyle } from "styled-components";

export const Classes = createGlobalStyle`

body{
	color: #FFF;
	font-family: 'Lato', sans-serif;
	
}	
.bg-transp{
	background: rgba(0, 0, 0, 0.61);
	backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(15px);
}
.bg-transp2{
	background: rgba(0, 0, 0, 0.61);
	backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(15px);
}
.bg-gradRoxo{
	background: linear-gradient(90deg, transparent, #725cff);
}
.shadow-gradRoxo{
	 box-shadow: 0 0 10px #725cff, 0 0 15px #470167, 0 0 10px #8000ff;
}

`;
