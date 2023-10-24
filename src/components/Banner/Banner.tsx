import React from "react";

export const Banner = () => {
  return (
    <React.Fragment>
      <div className="mx-[20px] sm:mx-0">
        <img
          src="Assets/BannerTop.png"
          alt="banner"
          className="hidden sm:block "
        />
        <img
          src="Assets/banner-55%off.png"
          alt="55%off"
          className=" sm:hidden"
        />
      </div>
    </React.Fragment>
  );
};
