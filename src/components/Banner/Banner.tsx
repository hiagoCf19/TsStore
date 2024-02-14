import React, { useState } from "react";

export const Banner = () => {
  const [bannerExibido, setBannerExibido] = useState<number>(0);
  {
    /* LOGICA PARA ALTERAR O ESTADO A CADA 4 SEGUNDOS, FAZENDO ASSIM COM QUE O BANNER EXIBIDO SEJA DIFERENTE A CADA 4 SEGUNDOS */
  }
  setTimeout(() => {
    bannerExibido < 3
      ? setBannerExibido(bannerExibido + 1)
      : setBannerExibido(0);
  }, 4000);
  return (
    <React.Fragment>
      <div >
        {/* BANNERS NO DESKTOP */}
        <img
          src={
            bannerExibido === 0
              ? "Assets/Desktop/Banner/gamer.png"
              : bannerExibido === 1
                ? "Assets/Desktop/Banner/verao.png"
                : bannerExibido === 2
                  ? "Assets/Desktop/Banner/plusSize.png"
                  : bannerExibido === 3
                    ? "Assets/Desktop/Banner/tenis.png"
                    : ""
          }
          alt="banner"
          className="hidden sm:block  "
        />
        {/* BANNERS NO MOBILEe */}
        <img
          src={
            bannerExibido === 0
              ? "Assets/Mobile/Banners/gamer.png"
              : bannerExibido === 1
                ? "Assets/Mobile/Banners/verao.png"
                : bannerExibido === 2
                  ? "Assets/Mobile/Banners/plus.png"
                  : bannerExibido === 3
                    ? "Assets/Mobile/Banners/tenis.png"
                    : ""
          }
          alt="banner"
          className=" sm:hidden"
        />
      </div>
    </React.Fragment>
  );
};
