import { BackGrad } from "@/Styles/Background";
import { Header } from "../Header/Header";
import { LoadingAni } from "../styledElements/loading";
import { Link } from "react-router-dom";

export const Trocas = () => {
  return (
    <BackGrad>
      <Header
        props={
          <Link to={"/"}>
            <div className="sm:bg-background px-2 sm:h-10 flex items-center justify-between w-full">
              <img
                src="Assets/tsStore.svg"
                alt="logo"
                className=" w-[90px] sm:w-[110px] "
              />
            </div>
          </Link>
        }
        line={<div className="h-[1px] w-full bg-roxo"></div>}
      />

      <section>
        <div className="flex justify-center items-center flex-col-reverse gap-4 w-full h-[80vh] ">
          Em desenvolvimento...
          <LoadingAni />
        </div>
      </section>
    </BackGrad>
  );
};
