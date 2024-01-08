import React, { ReactNode, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "@/routes";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronRight,
  Home,
  LogOut,
  MenuIcon,
  ShoppingBag,
  User,
} from "lucide-react";
import { Entradas } from "./Entrada";
import ControlLog from "@/Context/loginControl";
import UserCtx from "@/Context/UserCOntext";
import { UserArea } from "../UserArea/UserArea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import CarCtx from "@/Context/contextCar";

interface PropsHeader {
  props: ReactNode;
  line: ReactNode;
}

export const Header = ({ props, line }: PropsHeader) => {
  const { car } = useContext(CarCtx);
  const { userLogado, setUserLogado } = useContext(ControlLog);
  const { nomeDoUsuario } = useContext(UserCtx);

  nomeDoUsuario != null
    ? sessionStorage.setItem("userName", nomeDoUsuario)
    : null;
  useEffect(() => {
    if (nomeDoUsuario != null) {
      setUserLogado(true);
    }
  }, [nomeDoUsuario]);
  return (
    <React.Fragment>
      <header className=" sm:relative fixed z-50 sm:bg-transparent flex flex-col sm:flex-row  sm:items-center w-full border-b-[1px] border-solid border-roxo sm:border-none sm:px-[50px] sm:h-10 justify-between sm:pt-2 sm:mb-3">
        <div className="flex items-center">
          <div className="flex  sm:justify-normal items-center h-[3.625rem] px-4 bg-transparent w-full justify-between ">
            {props}
            {/* NAV MOBILE */}
            <nav className="sm:hidden  mx-4 flex items-center gap-4">
              <Link to={`/meu-carrinho`} className="">
                <div className=" p-1 relative rounded-lg">
                  <ShoppingBag size={25} color="#FFF" />
                  {car.length < 1 ? (
                    ""
                  ) : (
                    <span className="absolute bottom-5 left-6 bg-roxo p-1 rounded-full w-5 h-5 flex items-center justify-center text-[14px] font-bold ">
                      {car.length}
                    </span>
                  )}
                </div>
              </Link>
              <Sheet>
                <SheetTrigger>
                  <MenuIcon color="#875cff" size={30} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="gap-8">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className="flex flex-col gap-5 font-medium text-[1rem]  ">
                      {userLogado ? (
                        <div className="pb-5">
                          <div className="flex items-center gap-2">
                            <div>
                              <Avatar>
                                {/* Avatar image para quandop eu mpedir imagem para o usuario */}
                                <AvatarImage src="" />
                                <AvatarFallback className="bg-background border border-solid border-roxo">
                                  {nomeDoUsuario.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex flex-col">
                              <h1 className="text-lg font-semibold">
                                {nomeDoUsuario}
                              </h1>
                              <Link
                                to={`/${nomeDoUsuario.toLowerCase()}-perfil`}
                                className="text-sm mt-[-3px] flex items-center gap-1 text-[#a7a7a7] hover:underline cursor-pointer"
                              >
                                Minha conta
                                <ChevronRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={"/login"}
                          className="flex items-center gap-3 font-semibold border-b border-solid justify-center py-2"
                        >
                          <span className="ml-[-30px] flex items-center gap-2">
                            <User color="#725cff" />
                          </span>
                          Login
                        </Link>
                      )}

                      <div className="flex flex-col gap-3 ">
                        <Link className="flex items-center gap-3" to={"/"}>
                          <Home />
                          Home
                        </Link>
                        <Link
                          to={"/meu-carrinho"}
                          className="flex items-center gap-3"
                        >
                          <ShoppingBag /> Meu carrinho{" "}
                        </Link>

                        <p className="flex items-center gap-3">
                          {" "}
                          <LogOut /> Sair{" "}
                        </p>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
          {/* NAV DESK */}
          <nav className="hidden sm:block">
            <div className="text-white gap-16 text-[1.195rem] font-semibold pt-2 pl-[100px] flex ">
              {navRoutes.map((topico, i: number) => (
                <Link
                  className="hover:text-roxo hidden sm:block cursor-pointer"
                  id={topico.title}
                  key={i}
                  to={topico.link}
                >
                  {topico.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Link to={`/meu-carrinho`} className="relative hidden sm:block">
            <ShoppingBag size={30} />
            {car.length < 1 ? (
              ""
            ) : (
              <span className="absolute bottom-4 left-4 bg-roxo p-1 rounded-full w-5 h-5 flex items-center justify-center text-[14px] font-bold ">
                {car.length}
              </span>
            )}
          </Link>
          {userLogado ? (
            <div className="hidden sm:block">
              <UserArea />
            </div>
          ) : (
            <Entradas />
          )}
        </div>
      </header>
      <div className="sm:hidden">{line}</div>
      <div className="h-[30px] w-full sm:hidden mb-7"></div>
    </React.Fragment>
  );
};
