import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { TiArrowBackOutline } from "react-icons/ti";
import React from "react";

interface PropsCategory {
  category: string;
}
export const AllCategorys = ({ category }: PropsCategory) => {
  return (
    <React.Fragment>
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
      {category}
    </React.Fragment>
  );
};
