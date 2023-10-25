import { SearchStyled } from "../UiVerse/SearchStyled";
import React from "react";
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
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <React.Fragment>
      <header className=" sm:absolute fixed z-50 sm:bg-transparent flex flex-col sm:flex-row  sm:items-center sm:justify-between w-full bg-background border-b-[1px] border-solid border-roxo sm:border-none">
        <div className="flex justify-between sm:justify-normal items-center h-[3.625rem] px-4 sm:px-28 bg-transparent">
          <img
            src="Assets/tsStore.svg"
            alt="logo"
            className="sm:w-[140px] w-[80px] "
          />
          <div className="sm:hidden  mx-4">
            <Sheet>
              <SheetTrigger>
                <MenuIcon color="#875cff" size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="gap-8">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription className="flex flex-col gap-14 font-medium text-[1rem]  ">
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
          </div>
        </div>
        <nav className="text-black gap-[6.25rem] flex text-[1.195rem] font-semibold">
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
        </nav>
        <div className="p-4 sm:mr-28 hidden sm:block">
          <SearchStyled />
        </div>
      </header>
      <div className="h-[60px] w-full sm:hidden mb-7 "></div>
    </React.Fragment>
  );
};
