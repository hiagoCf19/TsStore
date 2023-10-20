import { VerifiedIcon, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderProduto = () => {
  return (
    <React.Fragment>
      <header className="fixed bg-primary h-[65px] w-full flex items-center justify-aroud px-4 text-[20px] text-white font-semibold gap-6">
        <VerifiedIcon size={60} color="#DAFF01" />
        <h1 className=""> Confira os detalhes sobre o produto</h1>
        <Link to={"/"} className="ml-8">
          <X size={30} color="#a7a7a785" />
        </Link>
      </header>
      <div className="h-[65px]"></div>
    </React.Fragment>
  );
};
