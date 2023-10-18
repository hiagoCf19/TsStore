import { ChevronLeft, ChevronRight } from "lucide-react";

export const Banner = () => {
  return (
    <>
      <div className="bg-image sm:bg-imageDesk h-[23.438rem] sm:h-[25.938rem]  bg-center bg-no-repeat bg-cover">
        <div className="relative h-full flex flex-col justify-center items-center">
          <div className=" flex justify-center gap-[240px] sm:gap-0 items-center sm:flex sm:justify-between sm:w-full sm:px-8 ">
            <ChevronLeft
              className="w-[2.188rem] h-[2.188rem]  sm:w-[3.75rem] sm:h-[3.75rem]"
              color="#FFF"
            />
            <ChevronRight
              className="w-[2.188rem] h-[2.188rem]  sm:w-[3.75rem] sm:h-[3.75rem]"
              color="#FFF"
            />
          </div>
          <div className=" absolute flex bottom-5 gap-2">
            <div className="w-7 h-[3px] bg-[#FFFFFF]"></div>
            <div className="w-7 h-[3px] bg-[#ffffff7e]"></div>
            <div className="w-7 h-[3px] bg-[#FFFFFF7e]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
