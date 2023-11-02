import styled from "styled-components";

const BtNeon = styled.button`
  --green: #875cff;
  width: max-content;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 1px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(135, 11, 184, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(135, 11, 184 0.1) 100%
  );
  color: #fff;
  box-shadow: inset 0 0 10px rgba(135, 92, 255, 0.4),
    0 0 9px 3px rgba(135, 92, 255, 0.1);

  &:hover {
    color: #fff;
    box-shadow: inset 0 0 10px rgba(135, 92, 255, 0.6),
      0 0 9px 3px rgba(135, 92, 255, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(135, 11, 184, 0.1) 40%,
      rgba(135, 11, 184, 0.1) 60%,
      transparent 100%
    );
  }

  &:hover::before {
    transform: translateX(15em);
  }
`;
export interface ContentProps {
  content: string;
}
export const BotaoStyled = ({ content }: ContentProps) => {
  return <BtNeon>{content}</BtNeon>;
};
