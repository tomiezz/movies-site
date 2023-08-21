import BannerFullWidth from "@/components/BannerFullWidth";
import Banner from "@/components/BannerTwoColumn";
import MovieCard from "@/components/MovieCard";
import SearchBox from "@/components/SearchBox";
import IconButton from "@/components/buttons/IconButton";
import SearchIcon from "@/components/svgs/SearchIcon";
import MainLayout from "@/layouts/MainLayout";
import { APP_ROUTES, NextPageWithLayout } from "@/utils";
import React, { ReactElement } from "react";

const ResultPage: NextPageWithLayout = () => {
  return (
    <div className="p-4 max-w-[1600px]">
      <h1 className="text-xl font-medium ">Search Movies</h1>
      {/* <SearchBox /> */}
      <div className="md:hidden m-2 mt-6">
        <SearchBox />
      </div>

      <div className="flex ">
        <aside className="py-2 flex-1  hidden md:block max-w-[300px] ">
          <div className="border p-4 border-current">
            <SearchBox />
          </div>
        </aside>

        <section className="mt-4 md:mt-0 flex-1  m-auto flex flex-wrap ">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <MovieCard href={APP_ROUTES.DETAIL} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

ResultPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ResultPage;
