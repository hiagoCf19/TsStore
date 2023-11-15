import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
	::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  
	border-radius: 100px;
}
@media (min-width: 640px) { 

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #f4f4f41c;
	border-radius: 100px;
}
 }



body{
	color: #FFF;
	font-family: 'Inter', sans-serif;
	
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
