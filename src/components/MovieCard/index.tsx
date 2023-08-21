import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithRef, memo } from "react";
import MockBannerImg from "@/assets/mock-banner-img.jpg";
import CSS from "./movie-card.module.css";
import Link, { LinkProps } from "next/link";

type Props = LinkProps;

const MoviewCard = (props: Props) => {
  return (
    <Link
      {...props}
      className={clsx(
        CSS["movie-card"],
        "bg-black relative block aspect-[5/6] md:aspect-[4/5]"
      )}
    >
      <Image
        alt="TODO"
        src={MockBannerImg}
        className="w-full object-cover h-full "
      />
      <div
        className={clsx(
          "absolute bottom-0 text-white p-4 w-full",
          CSS["movie-content"]
        )}
      >
        <h2 className="font-medium text-base md:text-lg truncate">
          Starfield Animated Anthology
        </h2>
        <p className="mt-4 line-clamp-3 text-sm">
          Starfield is launching on September 6. Check out the full Starfield
          Direct for a deeper look into the game and get ready for launch with
          all the details on pre-orders, early access and the various game
          editions.
        </p>
        <p className="text-sm md:text-base my-4">Genres: Action, Drama</p>
      </div>
    </Link>
  );
};

export default memo(MoviewCard);
