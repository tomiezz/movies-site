import React from "react";
import MockBannerImg from "@/assets/mock-banner-img.jpg";
import Image from "next/image";
import CSS from "./banner-full-width.module.css";
import clsx from "clsx";
import Rating from "../Rating";

type Props = {
  title?: string;
  imgUrl?: string;
};

const BannerFullWidth = ({ title, imgUrl }: Props) => {
  return (
    <div
      className={clsx(
        "aspect-[16/9] md:aspect-[3/1] flex-1 relative",
        CSS.bannerGradient
      )}
    >
      {imgUrl ? (
        <Image
          className="w-full object-cover h-full"
          src={imgUrl}
          alt={title || "Image"}
          fill
        />
      ) : (
        <Image
          className="w-full object-cover h-full"
          src={MockBannerImg}
          alt="Play Starfield up to 5 Days Early"
        />
      )}

      <div className="text-white flex items-center flex-col justify-center flex-1 p-4 items-center md:justify-center items-start absolute top-0 w-full h-full p-4 z-10">
        <h2 className="mb-4 font-medium text-center md:text-xl">{title}</h2>
        <Rating />
      </div>
    </div>
  );
};

export default BannerFullWidth;
