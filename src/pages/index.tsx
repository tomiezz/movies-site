import Banner from "@/components/BannerTwoColumn";
import MovieCard from "@/components/MovieCard";
import MainLayout from "@/layouts/MainLayout";
import { APP_ROUTES, NextPageWithLayout } from "@/utils";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { ReactElement } from "react";
import * as cookieLib from "cookie";

export const getServerSideProps: GetServerSideProps<{
  user?: string | null;
}> = async (ctx) => {
  let cookie = cookieLib.parse(ctx?.req.headers.cookie || "");

  let user = null;

  if (cookie && cookie?.auth === "true") {
    user = "tomiez";
  }

  return { props: { user } };
};

const Home: NextPageWithLayout = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <div role="banner" className="bg-black ">
        <div className="max-w-[1600px] m-auto ">
          <Banner />
        </div>
      </div>
      <h1 className="text-center my-8 text-2xl font-medium">Movies</h1>
      <section className="max-w-[1600px] m-auto flex flex-wrap md:mb-16">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <div key={idx} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
            <MovieCard href={APP_ROUTES.DETAIL} />
          </div>
        ))}
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement, user) {
  return <MainLayout user={user}>{page}</MainLayout>;
};

export default Home;
