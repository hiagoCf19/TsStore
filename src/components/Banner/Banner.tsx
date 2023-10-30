import React, { useState } from "react";

export const Banner = () => {
  const [bannerExibido, setBannerExibido] = useState<number>(0);
  setTimeout(() => {
    bannerExibido < 3
      ? setBannerExibido(bannerExibido + 1)
      : setBannerExibido(0);
  }, 4000);
  return (
    <React.Fragment>
      <div className="mx-[20px] sm:mx-0 abs">
        <img
          src={
            bannerExibido === 0
              ? "Assets/Banner/gamer.png"
              : bannerExibido === 1
              ? "Assets/Banner/verao.png"
              : bannerExibido === 2
              ? "Assets/Banner/plusSize.png"
              : bannerExibido === 3
              ? "Assets/Banner/tenis.png"
              : ""
          }
          alt="banner"
          className="hidden sm:block  "
        />
        <img src="Assets/bannerOff.png" alt="55off" className=" sm:hidden" />
      </div>
    </React.Fragment>
  );
};
