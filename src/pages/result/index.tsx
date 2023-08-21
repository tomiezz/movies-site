import BannerFullWidth from "@/components/BannerFullWidth";
import Banner from "@/components/BannerTwoColumn";
import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/utils";
import React, { ReactElement } from "react";

const ResultPage: NextPageWithLayout = () => {
  return (
    <div>
      <div role="banner" className="bg-black ">
        <div className="max-w-[1600px] m-auto ">
          <BannerFullWidth />
        </div>
      </div>
      <div>
        Overview Recent college grad Jaime Reyes returns home full of
        aspirations for his future, only to find that home is not quite as he
        left it. As he searches to find his purpose in the world, fate
        intervenes when Jaime unexpectedly finds himself in possession of an
        ancient relic of alien biotechnology: the Scarab.
      </div>
    </div>
  );
};

ResultPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ResultPage;
