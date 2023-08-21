import React from "react";
import MockBannerImg from "@/assets/mock-banner-img.jpg";
import Image from "next/image";
import CSS from "./banner-full-width.module.css";
import clsx from "clsx";
import Rating from "../Rating";

const BannerFullWidth = () => {
  return (
    <div
      className={clsx(
        "aspect-[16/9] md:aspect-[3/1] flex-1 relative",
        CSS.bannerGradient
      )}
    >
      <Image
        className="w-full object-cover h-full"
        src={MockBannerImg}
        alt="Play Starfield up to 5 Days Early"
      />
      <div className="text-white flex items-center flex-col justify-center flex-1 p-4 items-center md:justify-center items-start absolute top-0 w-full h-full p-4 z-10">
        <h2 className="mb-4 font-medium text-center md:text-xl">
          Play Starfield up to 5 Days Early Play Starfield up to 5 Days Early
        </h2>
        <Rating />
      </div>
    </div>
  );
};

export default BannerFullWidth;
