import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Galaxy = styled.div`
  .card {
  }
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

  background-color: #010101;
  background-image: var(--space-gradient), var(--stars);
  background-size: 175% 200%;
  background-repeat: no-repeat;
  box-shadow: 5px 7px 20px var(--bg-col);
  overflow: clip;
  animation: space-drift 180s ease-in-out infinite;

  padding: 20px 20px;
  @media (min-width: 640px) {
    min-width: max-content;
    padding: 2rem 4rem;
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
`;
const Erro404: React.FC = () => {
  return (
    <Galaxy>
      <div className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Erro 404 - Página não encontrada
        </h1>
        <p className="text-lg text-white">
          A página que você está procurando não existe.
        </p>
        <p className="text-lg text-white">
          Por favor, verifique o URL ou{" "}
          <Link to={"/"} className="text-roxo">
            retorne à página inicial
          </Link>
          .
        </p>
      </div>
    </Galaxy>
  );
};

export default Erro404;
