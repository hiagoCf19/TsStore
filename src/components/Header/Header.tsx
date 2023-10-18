import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export const Header = () => {
  const navMenu: string[] = ["Home", "Nossa loja", "Novidades", "Promoções"];
  return (
    <header className="flex flex-col sm:flex-row sm:bg-primary sm:items-center sm:justify-between ">
      <div className="flex justify-between sm:justify-normal items-center bg-primary h-[3.625rem] px-4 sm:px-28 ">
        <img src="Assets/tsStore.svg" alt="logo" className="w-[140px]" />
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon color="#DAFF01" />
            </SheetTrigger>
            <SheetContent className="bg-primary">
              <SheetHeader className="gap-8">
                <SheetTitle className="text-white text-[1.3rem] py-8">
                  Menu
                </SheetTitle>

                <SheetDescription className="flex flex-col gap-14 font-medium text-[1rem]  ">
                  {navMenu.map((topico) => (
                    <a className="hover:text-white" id={topico} key={topico}>
                      {topico}
                    </a>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <nav className="text-[#FFFFFF] gap-[6.25rem] flex text-[1.125rem] font-medium">
        {navMenu.map((topico) => (
          <a
            className="hover:text-[#DAFF01] hidden sm:block cursor-pointer"
            id={topico}
            key={topico}
          >
            {topico}
          </a>
        ))}
      </nav>
      <div className="p-4 flex justify-center gap-3 sm:mr-28">
        <Input
          type="search"
          placeholder="Busque por um produto"
          className="w-[15.625rem] border border-solid border-[#a7a7a7] sm:bg-white"
        />
        <Button className="sm:border sm:border-solid border-[#CCCCC] ">
          Search
        </Button>
      </div>
    </header>
  );
};
