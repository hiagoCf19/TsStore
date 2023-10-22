import { VerifiedIcon, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderProduto = () => {
  return (
    <React.Fragment>
      <header className="fixed bg-primary h-[65px] w-full flex justify-aroud sm:justify-between  px-4 text-[20px] text-white font-semibold gap-6 sm:px-20">
        <div className="flex items-center gap-4">
          <VerifiedIcon size={45} color="#5CD2E6" />
          <h1 className=""> Confira os detalhes sobre o produto</h1>
        </div>
        <div className="flex items-center">
          <Link to={"/#produtos-do-momento"} className="ml-8 sm:">
            <X size={30} color="#a7a7a785" />
          </Link>{" "}
        </div>
      </header>
      <div className="h-[65px]"></div>
    </React.Fragment>
  );
};
