import { TiArrowBackOutline } from "react-icons/ti";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";

export const AllOferts = () => {
  return (
    <>
      <Header
        props={
          <Link to={"/"}>
            <div className="sm:w-[120px] w-[50px] sm:mt-1">
              <TiArrowBackOutline size={40} color={"#875cff"} />
            </div>
          </Link>
        }
        line={<div className="h-[1px] w-full bg-roxo"></div>}
      />
    </>
  );
};
