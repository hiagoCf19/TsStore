import { Check, Code, Ruler } from "lucide-react";
import styled from "styled-components";

const DeskSty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  .heading {
    font-size: 0.9rem;
    text-align: center;
  }

  .heading span {
    font-size: 2.2rem;
    font-weight: bold;
    display: block;
    font-style: italic;
    margin-top: 0.25rem;
    background-image: linear-gradient(
      90deg,
      rgb(209, 189, 232),
      rgb(74, 5, 158),
      rgb(209, 189, 232),
      rgb(74, 5, 158)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 15px 10px 25px rgb(92, 3, 201);
    text-transform: uppercase;
    letter-spacing: 1rem;
    z-index: 99;
    animation: heading-stretch 0.7s forwards ease-out;
  }

  .heading span::before,
  .heading span::after {
    content: "—";
  }

  .content {
    display: grid;
    place-items: center;
    padding: 2rem;
    z-index: 1;
  }

  .item {
    --item-duration: 8s;
    --idx: 0;
    display: flex;
    grid-area: 1 / 1;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    text-transform: lowercase;
    font-style: italic;
    opacity: 0;
    animation: item-fade var(--item-duration) infinite ease-in-out;
    animation-delay: calc(var(--idx) * var(--item-duration) / 3);
  }

  .item svg {
    width: 3rem;
    height: 3rem;
  }

  .item--create {
    --idx: 0;
  }

  .item--post {
    --idx: 1;
  }

  .item--inspire {
    --idx: 2;
  }

  /*
    ANIMATION: HEADING
*/

  @-webkit-keyframes heading-stretch {
    from {
      opacity: 0.8;
      transform: scale(0.8);
      letter-spacing: normal;
      filter: blur(50px);
      text-shadow: none;
    }

    to {
      opacity: unset;
      transform: unset;
      letter-spacing: 1rem;
      filter: unset;
    }
  }

  @-moz-keyframes heading-stretch {
    from {
      opacity: 0.8;
      transform: scale(0.8);
      letter-spacing: normal;
      filter: blur(50px);
      text-shadow: none;
    }

    to {
      opacity: unset;
      transform: unset;
      letter-spacing: 1rem;
      filter: unset;
    }
  }

  @keyframes heading-stretch {
    from {
      opacity: 0.8;
      transform: scale(0.8);
      letter-spacing: normal;
      filter: blur(50px);
      text-shadow: none;
    }

    to {
      opacity: unset;
      transform: unset;
      letter-spacing: 1rem;
      filter: unset;
    }
  }

  /*
    ANIMATION: ITEM FADE
*/

  @-webkit-keyframes item-fade {
    0%,
    20% {
      opacity: 0;
      transform: translateX(10px);
      filter: blur(5px);
    }

    40%,
    60% {
      opacity: 1;
      transform: unset;
      filter: unset;
    }

    70%,
    100% {
      opacity: 0;
      transform: translateX(-10px);
      filter: blur(5px);
    }
  }

  @-moz-keyframes item-fade {
    0%,
    20% {
      opacity: 0;
      transform: translateX(10px);
      filter: blur(5px);
    }

    40%,
    60% {
      opacity: 1;
      transform: unset;
      filter: unset;
    }

    70%,
    100% {
      opacity: 0;
      transform: translateX(-10px);
      filter: blur(5px);
    }
  }

  @keyframes item-fade {
    0%,
    20% {
      opacity: 0;
      transform: translateX(10px);
      filter: blur(5px);
    }

    40%,
    60% {
      opacity: 1;
      transform: unset;
      filter: unset;
    }

    70%,
    100% {
      opacity: 0;
      transform: translateX(-10px);
      filter: blur(5px);
    }
  }
`;
export const DeskLeft = () => {
  return (
    <DeskSty>
      <div className="heading">
        <img src="Assets/tsStore.svg" className="w-[400px] ml-5" />
        <span>Bem-vindo</span>
      </div>
      <div className="content">
        <div className="item item--create">
          <Ruler />
          <span>Estilo</span>
        </div>
        <div className="item item--post">
          <Code />
          <span>Tecnologia</span>
        </div>
        <div className="item item--inspire">
          <Check />
          <span>Qualidade</span>
        </div>
      </div>
    </DeskSty>
  );
};
