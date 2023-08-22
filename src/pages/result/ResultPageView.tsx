import React from "react";
import BannerFullWidth from "@/components/BannerFullWidth";
import Banner from "@/components/BannerTwoColumn";
import MovieCard from "@/components/MovieCard";
import SearchBox from "@/components/SearchBox";
import IconButton from "@/components/buttons/IconButton";
import SearchIcon from "@/components/svgs/SearchIcon";
import { APP_ROUTES, resolveMovieImg } from "@/utils";
import ResultContainer from "@/features/movies";
import {
  SearchPanelDesktop,
  SearchPanelMobile,
} from "@/features/movies/components/SearchPanel";

const ResultPageView = () => {
  return (
    <div className="p-4 max-w-[1600px]">
      <h1 className="text-xl font-medium ">Search Movies</h1>
      {/* <SearchBox /> */}
      <div className="md:hidden">
        <SearchPanelMobile />
      </div>

      <div className="flex ">
        <SearchPanelDesktop />

        <section className="mt-4 md:mt-0 flex-1  m-auto flex flex-wrap ">
          <ResultContainer.Result />
        </section>
      </div>
    </div>
  );
};

export default ResultPageView;
