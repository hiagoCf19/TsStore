import { createGlobalStyle } from "styled-components";

export const Galaxy = createGlobalStyle`

 :root{
  --bg-col: #000;
  --space-col: #180977;
  --galaxy-col: #3c2ba8;
  --space-gradient: radial-gradient(ellipse at top, var(--bg-col), transparent),
    radial-gradient(ellipse at bottom, var(--galaxy-col) 10%, transparent 60%),
    radial-gradient(ellipse at bottom right, var(--space-col), transparent);
  --space-gradient-alt: radial-gradient(
      ellipse at top left,
      var(--space-col),
      transparent
    ),
    radial-gradient(ellipse at bottom, var(--galaxy-col) 10%, transparent 60%),
    radial-gradient(ellipse at bottom right, var(--bg-col), transparent);
  --stars: radial-gradient(
      circle at 52% 54%,
      rgba(255, 255, 255, 0.582) 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at 22% 24%,
      rgba(255, 255, 255, 0.582) 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 14% 18%,
      rgba(255, 255, 255, 0.582) 3px,
      transparent 8px
    ),
    radial-gradient(
      circle at 18% 21%,
      rgba(255, 255, 255, 0.582) 4px,
      transparent 5px
    ),
    radial-gradient(
      circle at 36% 9%,
      rgba(255, 255, 255, 0.582) 3px,
      transparent 5px
    ),
    radial-gradient(
      circle at 28% 31%,
      rgba(255, 255, 255, 0.39) 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 62% 61%,
      rgba(255, 255, 255, 0.532) 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at 57% 66%,
      rgba(255, 255, 255, 0.842) 6px,
      transparent 8px
    ),
    radial-gradient(
      circle at 65% 71%,
      rgba(255, 255, 255, 0.534) 1px,
      transparent 3px
    ),
    radial-gradient(
      circle at 67% 68%,
      rgba(255, 255, 255, 0.651) 3px,
      transparent 3px
    ),
    radial-gradient(
      circle at 43% 44%,
      rgba(255, 255, 255, 0.74) 2px,
      transparent 6px
    ),
    radial-gradient(
      circle at 40% 39%,
      rgba(183, 243, 255, 0.842) 4px,
      transparent 10px
    ),
    radial-gradient(
      circle at 41% 40%,
      rgba(255, 255, 255, 0.699) 5px,
      transparent 6px
    ),
    radial-gradient(
      circle at 38% 38%,
      rgba(255, 255, 255, 0.349) 2px,
      transparent 4px
    ),
    radial-gradient(
      circle at 39% 42%,
      rgba(255, 255, 255, 0.747) 5px,
      transparent 7px
    ),
    radial-gradient(
      circle at 80% 31%,
      rgba(255, 255, 255, 0.781) 4px,
      transparent 6px
    ),
    radial-gradient(
      circle at 25% 64%,
      rgba(255, 255, 255, 0.425) 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at 41% 49%,
      rgba(255, 255, 255, 0.678) 3px,
      transparent 6px
    ),
    radial-gradient(
      circle at 50% 37%,
      rgba(255, 255, 255, 0.336) 1px,
      transparent 3px
    ),
    radial-gradient(
      circle at 4% 37%,
      rgba(255, 255, 255, 0.336) 1px,
      transparent 3px
    ),
    radial-gradient(
      circle at 8% 60%,
      rgba(255, 255, 255, 0.336) 1px,
      transparent 4px
    ),
    radial-gradient(
      circle at 12% 54%,
      rgba(255, 255, 255, 0.336) 1px,
      transparent 5px
    ),
    radial-gradient(
      circle at 6% 59%,
      rgba(255, 255, 255, 0.336) 2px,
      transparent 10px
    ),
    radial-gradient(
      circle at 9% 57%,
      rgba(255, 255, 255, 0.336) 1px,
      transparent 2px
    ),
    radial-gradient(
      circle at 14% 61%,
      rgba(255, 255, 255, 0.336) 2px,
      transparent 6px
    );
 }
  
body{

  background-color: #010101;
  background-image: var(--space-gradient);
  background-size: 175% 200%;
  background-repeat: no-repeat;
  box-shadow: 5px 7px 20px var(--bg-col);
 
  animation: space-drift 180s ease-in-out infinite;;
  -webkit-animation: space-drift 180s ease-in-out infinite ;
  
}
          

  /*
    ANIMATION: SPACE
*/

  @-webkit-keyframes space-drift {
    0% {
      background-position: 0% 50%;
    }

    33% {
      background-position: 80% 0%;
    }

    67% {
      background-position: 80% 100%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes space-drift {
    0% {
      background-position: 0% 50%;
    }

    33% {
      background-position: 80% 0%;
    }

    67% {
      background-position: 80% 100%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes space-drift {
    0% {
      background-position: 0% 50%;
    }

    33% {
      background-position: 80% 0%;
    }

    67% {
      background-position: 80% 100%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
  body{

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
