import styled from "styled-components";
import { Galaxy } from "../ERROR/Error404";
const Container = styled.div`
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 6px;
  height: 100vh;

  @media (min-width: 640px) {
    height: 90vh;
  }
`;
export const LoginCpn = () => {
  return (
    <>
      <Galaxy>
        <section>
          <Container>a</Container>
        </section>
      </Galaxy>
    </>
  );
};
