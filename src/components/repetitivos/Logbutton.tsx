import styled from "styled-components";

const StyButton = styled.div`
  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #725cff);
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 0.7s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #270658);
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 0.7s;
    transition-delay: 0.35s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #47058d);
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 0.7s;
    transition-delay: 0.17s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #8c00ff);
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 0.7s;
    transition-delay: 0.52s;
  }

  &:active {
    background: rgba(0, 0, 0, 0.161);
    background: rgba(0, 0, 0, 0.161);
    color: #bfbfbf;
    box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
    transition: 0.1s;
  }

  &:active
    span:nth-child(1)
    span:nth-child(2)
    span:nth-child(2)
    span:nth-child(2) {
    transition: none;
    transition-delay: none;
  }
`;
interface Content {
  content: string;
}
export const LogButton = ({ content }: Content) => {
  return (
    <StyButton>
      <a
        type="submit"
        className="relative px-20 sm:px-[2.5em] py-4 w-full outline-none bg-transp text-white uppercase block tracking-[2px] text-sm overflow-hidden transition-all duration-200 cursor-pointer font-bold hover:shadow-custom hover:transition hover:delay-700"
      >
        <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-roxo duracao "></span>
        <span className="absolute"></span>
        <span className="absolute"></span>
        <span className="absolute"></span>
        {content}
      </a>
    </StyButton>
  );
};
