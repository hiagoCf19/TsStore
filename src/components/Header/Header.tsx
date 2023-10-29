import React, { ReactNode } from "react";
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

interface PropsHeader {
  props: ReactNode;
  line: ReactNode;
}
export const Header = ({ props, line }: PropsHeader) => {
  return (
    <React.Fragment>
      <header className=" sm:relative fixed z-50 sm:bg-transparent flex flex-col sm:flex-row  sm:items-center w-full bg-background border-b-[1px] border-solid border-roxo sm:border-none sm:px-[200px] sm:h-10 justify-between">
        <div className="flex items-center">
          <div className="flex justify-between sm:justify-normal items-center h-[3.625rem] px-4 bg-transparent w-full">
            {/* LOGO (SOMENTE DESK) */}
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
          <nav className=" text-white gap-16 flex text-[1.195rem] font-semibold">
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
        </div>

        <div className="text-white hidden sm:block">aa</div>
      </header>
      {line}

      <div className="h-[40px] w-full sm:hidden mb-7"></div>
    </React.Fragment>
  );
};
