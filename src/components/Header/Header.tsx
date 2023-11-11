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
import { MenuIcon, User } from "lucide-react";
import { Entradas } from "./Entrada";
import ControlLog from "@/Context/loginControl";
import UserCtx from "@/Context/UserCOntext";
import { UserArea } from "./UserArea";

interface PropsHeader {
  props: ReactNode;
  line: ReactNode;
}
export const Header = ({ props, line }: PropsHeader) => {
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
      <header className=" sm:relative fixed z-50 sm:bg-transparent flex flex-col sm:flex-row  sm:items-center w-full bg-background border-b-[1px] border-solid border-roxo sm:border-none sm:px-[50px] sm:h-10 justify-between sm:pt-2">
        <div className="flex items-center">
          <div className="flex  sm:justify-normal items-center h-[3.625rem] px-4 bg-transparent w-full justify-between ">
            {props}
            {/* NAV MOBILE */}
            <nav className="sm:hidden  mx-4">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon color="#875cff" size={30} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="gap-8">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className="flex flex-col gap-14 font-medium text-[1rem]  ">
                      {userLogado ? (
                        <UserArea />
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

                      {navRoutes.map((topico, i: number) => (
                        <Link
                          className="hover:text-white outline-none"
                          key={i}
                          to={topico.link}
                        >
                          {topico.title}
                        </Link>
                      ))}
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
        {userLogado ? <UserArea /> : <Entradas />}
      </header>
      <div className="sm:hidden">{line}</div>

      <div className="h-[40px] w-full sm:hidden mb-7"></div>
    </React.Fragment>
  );
};
