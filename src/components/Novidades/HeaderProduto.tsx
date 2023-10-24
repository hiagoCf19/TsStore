import { VerifiedIcon, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderProduto = () => {
  return (
    <React.Fragment>
      <header className="fixed bg-background h-[65px] w-full flex justify-aroud sm:justify-between  px-4 text-[20px] text-white font-semibold gap-6 sm:px-20 border-b-[1px] border-solid border-roxo sm:border-none">
        <div className="flex items-center gap-4">
          <VerifiedIcon size={45} color="#875cff" />
          <h1 className=""> Confira os detalhes sobre o produto</h1>
        </div>
        <div className="flex items-center">
          <Link to={"/#produtos-do-momento"} className="ml-8 sm:">
            <X size={30} color="#a7a7a785" />
          </Link>{" "}
        </div>
      </header>
      <div className="h-[200px] w-full"></div>
    </React.Fragment>
  );
};
