import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { SearchStyled } from "../UiVerse/SearchStyled";
import React from "react";
interface Topico {
  topico: string;
  ancora: string;
}
export const Header = () => {
  const navMenu: Topico[] = [
    {
      topico: "Home",
      ancora: "#",
    },
    {
      topico: "Nossa loja",
      ancora: "",
    },
    {
      topico: "Novidades",
      ancora: "#produtos-do-momento",
    },
    {
      topico: "Promoções",
      ancora: "",
    },
  ];
  return (
    <React.Fragment>
      <header className=" sm:absolute fixed sm:bg-transparent flex flex-col sm:flex-row  sm:items-center sm:justify-between w-full bg-background border-b-[1px] border-solid border-roxo sm:border-none">
        <div className="flex justify-between sm:justify-normal items-center h-[3.625rem] px-4 sm:px-28 bg-transparent ">
          <img
            src="Assets/tsStore.svg"
            alt="logo"
            className="sm:w-[140px] w-[80px] mt-3"
          />
          <div className="sm:hidden border mx-4">
            <Sheet>
              <SheetTrigger>
                <MenuIcon color="#875cff" className="flex mt-3" />
              </SheetTrigger>
              <SheetContent className="bg-background">
                <SheetHeader className="gap-8">
                  <SheetTitle className="text-white text-[1.3rem] py-8">
                    Menu
                  </SheetTitle>

                  <SheetDescription className="flex flex-col gap-14 font-medium text-[1rem]  ">
                    {navMenu.map((topico: Topico) => (
                      <a
                        className="hover:text-white outline-none"
                        id={topico.topico}
                        key={topico.topico}
                        href={topico.ancora}
                      >
                        {topico.topico}
                      </a>
                    ))}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <nav className="text-black gap-[6.25rem] flex text-[1.195rem] font-semibold">
          {navMenu.map((topico: Topico) => (
            <a
              className="hover:text-roxo hidden sm:block cursor-pointer"
              id={topico.topico}
              key={topico.topico}
              href={topico.ancora}
            >
              {topico.topico}
            </a>
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
