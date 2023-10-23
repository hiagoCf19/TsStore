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
    <header className="fixed flex flex-col sm:flex-row sm:bg-primary sm:items-center sm:justify-between w-full border-b border-solid border-[#5cd2e6]">
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
                  {navMenu.map((topico: Topico) => (
                    <a
                      className="hover:text-white"
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
      <nav className="text-[#FFFFFF] gap-[6.25rem] flex text-[1.125rem] font-medium">
        {navMenu.map((topico: Topico) => (
          <a
            className="hover:text-[#DAFF01] hidden sm:block cursor-pointer"
            id={topico.topico}
            key={topico.topico}
            href={topico.ancora}
          >
            {topico.topico}
          </a>
        ))}
      </nav>
      <div className="p-4 flex justify-center  sm:mr-28">
        <SearchStyled />
      </div>
    </header>
  );
};
