import React from "react";
import MockBannerImg from "@/assets/mock-banner-img.jpg";
import Image from "next/image";
import Button from "../buttons/CommonButton";
import CSS from "./banner.module.css";
import clsx from "clsx";

const Banner = () => {
  return (
    <div className="md:flex ">
      <div
        className={clsx(
          "aspect-video md:aspect-square flex-1",
          CSS.bannerGradient
        )}
      >
        <Image
          className="w-full object-cover h-full"
          src={MockBannerImg}
          alt="Play Starfield up to 5 Days Early"
        />
      </div>
      <div className="text-white flex-1 p-4 md:flex md:flex-col md:justify-center items-start">
        <h2 className="font-medium truncate md:text-xl">
          Play Starfield up to 5 Days Early
        </h2>
        <div className="text-sm mt-2 md:mt-4 line-clamp-3">
          Starfield is launching on September 6. Check out the full Starfield
          Direct for a deeper look into the game and get ready for launch with
          all the details on pre-orders, early access and the various game
          editions.
        </div>
        <Button type="link" props={{ className: "inline-block mt-4 md:mt-8" }}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Banner;
