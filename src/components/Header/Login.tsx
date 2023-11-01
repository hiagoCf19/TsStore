import { Galaxy } from "@/Styles/Galaxy";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 6px;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCpn = () => {
  return (
    <>
      <Galaxy />
      <section className="h-[100vh]">
        <div className="flex justify-center items-center h-full">
          <Container>
            {/* DESKTOP */}
            <div className="p-8 flex gap-6 w-full sm:h-full">
              <div className="flex-1 border border-solid hidden sm:block">
                1
              </div>
              <div className="flex-1 border border-solid">2</div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
