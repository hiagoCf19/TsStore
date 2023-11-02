import styled from "styled-components";

const StyButton = styled.button`
  position: relative;
  padding: 1em 2.5em;
  width: 100%;
  outline: none;
  background: rgba(0, 0, 0, 0.61);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 10px #725cff, 0 0 25px #470167, 0 0 20px #ae00ff;
    transition-delay: 0.6s;
  }

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
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </StyButton>
  );
};
