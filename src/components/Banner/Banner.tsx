import { useState } from "react";

export const Banner = () => {
  const [bannerAtual, setBannerAtual] = useState(1);
  setTimeout(() => {
    bannerAtual < 3 ? setBannerAtual(bannerAtual + 1) : setBannerAtual(1);
  }, 4000);

  return (
    <>
      <div
        className={` 
        ${
          bannerAtual === 1
            ? "bg-BannerRoxoMobile sm:bg-BannerRoxoDesktop"
            : null
        }
        ${
          bannerAtual === 2
            ? " bg-BannerLaranjaMobile sm:bg-BannerRosaDesktop"
            : null
        }
        ${
          bannerAtual === 3
            ? "bg-BannerRosaMobile sm:bg-BannerLaranjaDesktop"
            : null
        }
        h-[23.438rem] sm:h-[25.938rem]  bg-center bg-no-repeat bg-cover`}
      >
        <div className="relative h-full flex flex-col justify-center items-center">
          <div className=" flex justify-center gap-[15rem] sm:gap-0 items-center sm:flex sm:justify-between sm:w-full sm:px-8 "></div>
          <div className=" absolute flex bottom-5 gap-2">
            <div
              className={`w-7 h-[3px]  ${
                bannerAtual === 1 ? "bg-[#DAFF01]" : "bg-[#ffffff7e]"
              }
        `}
            ></div>
            <div
              className={`w-7 h-[3px]  ${
                bannerAtual === 2 ? "bg-[#DAFF01]" : "bg-[#ffffff7e]"
              }
        `}
            ></div>
            <div
              className={`w-7 h-[3px]  ${
                bannerAtual === 3 ? "bg-[#DAFF01]" : "bg-[#ffffff7e]"
              }
        `}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
