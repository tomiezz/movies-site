import Banner from "@/components/BannerTwoColumn";
import MovieCard from "@/components/MovieCard";
import MainLayout from "@/layouts/MainLayout";
import {
  APP_ROUTES,
  MovieType,
  NextPageWithLayout,
  resolveMovieImg,
} from "@/utils";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { ReactElement } from "react";
import * as cookieLib from "cookie";
import { recommendMovies, trendingMovies } from "@/utils/models";
import SlideShow from "@/components/SlideShow";

export const getServerSideProps: GetServerSideProps<{
  user?: string | null;
  trendingMovies: MovieType[];
  recommendMovies: MovieType[];
}> = async (ctx) => {
  let cookie = cookieLib.parse(ctx?.req.headers.cookie || "");

  let user = null;

  if (cookie && cookie?.auth === "true") {
    user = "tomiez";
  }

  return {
    props: {
      user,
      trendingMovies: trendingMovies,
      recommendMovies: recommendMovies,
    },
  };
};

const Home = ({
  user,
  recommendMovies,
  trendingMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <div role="banner" className="bg-black ">
        <div className="max-w-[1600px] m-auto ">
          <SlideShow autoPlay duration={5000}>
            {trendingMovies?.map((item) => (
              <Banner
                key={item.id}
                title={item.title}
                descripttion={item.overview}
                href={`${APP_ROUTES.DETAIL}/${item.id}`}
                imgUrl={resolveMovieImg(item.backdrop_path)}
              />
            ))}
          </SlideShow>
        </div>
      </div>
      <h1 className="text-center my-8 text-2xl font-medium">Movies</h1>
      <section className="max-w-[1600px] m-auto flex flex-wrap md:mb-16">
        {recommendMovies &&
          recommendMovies.map((item, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
              <MovieCard
                key={item.id}
                title={item.title}
                descripttion={item.overview}
                href={`${APP_ROUTES.DETAIL}/${item.id}`}
                imgUrl={resolveMovieImg(item.backdrop_path)}
              />
            </div>
          ))}
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement, user: any) {
  return <MainLayout user={user}>{page}</MainLayout>;
};

export default Home;
