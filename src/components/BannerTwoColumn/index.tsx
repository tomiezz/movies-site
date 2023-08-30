import React, { memo } from "react";
import MockBannerImg from "@/assets/mock-banner-img.jpg";
import Image from "next/image";
import Button from "../buttons/CommonButton";
import CSS from "./banner.module.css";
import clsx from "clsx";

type Props = {
  title?: string;
  descripttion?: string;
  href?: string;
  imgUrl?: string;
};

const Banner = ({ descripttion, href, title, imgUrl }: Props) => {
  return (
    <div className="md:flex ">
      <div
        className={clsx(
          "aspect-video md:aspect-square flex-1",
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
      </div>
      <div className="text-white flex-1 p-4 md:flex md:flex-col md:justify-center items-start">
        <h2 className="font-medium truncate md:text-xl">{title}</h2>
        <div className="text-sm mt-2 md:mt-4 line-clamp-3">{descripttion}</div>
        <Button
          type="link"
          props={{ className: "inline-block mt-4 md:mt-8", href }}
        >
          <>
            Read More <p className="hidden"> </p>about movie
          </>
        </Button>
      </div>
    </div>
  );
};

export default memo(Banner);
