import Banner from "@/components/Banner";
import MovieCard from "@/components/MovieCard";
import MainLayout from "@/layouts/MainLayout";
import { APP_ROUTES, NextPageWithLayout } from "@/utils";
import Image from "next/image";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div role="banner" className="bg-black ">
        <div className="max-w-[1600px] m-auto ">
          <Banner />
        </div>
      </div>
      <h1 className="text-center my-8 text-2xl font-medium">Movies</h1>
      <section className="max-w-[1600px] m-auto flex flex-wrap ">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <div key={idx} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
            <MovieCard href={APP_ROUTES.DETAIL} />
          </div>
        ))}
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
