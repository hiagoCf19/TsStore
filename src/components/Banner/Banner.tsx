import React from "react";

export const Banner = () => {
  return (
    <React.Fragment>
      <div className="mx-[20px] sm:mx-0 abs">
        <img
          src="Assets/BannerTop.png"
          alt="banner"
          className="hidden sm:block "
        />
        <img src="Assets/bannerOff.png" alt="55off" className=" sm:hidden" />
      </div>
    </React.Fragment>
  );
};
