import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { CoHeader } from "../Header/CoHeader";

export const AllOferts = () => {
  return (
    <>
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
      <CoHeader />
      <section>Interface ver todos em produção...</section>
    </>
  );
};
