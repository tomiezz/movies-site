import MainLayout from "@/layouts/MainLayout";
import {
  APP_ROUTES,
  MovieType,
  NextPageWithLayout,
  resolveMovieImg,
} from "@/utils";
import React, { ReactElement } from "react";
import * as cookieLib from "cookie";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { allMovies } from "@/utils/models";
import ResultPageView from "./ResultPageView";
import ResultContainer from "@/features/movies";

export const getServerSideProps: GetServerSideProps<{
  user?: string | null;
  data?: MovieType[] | null;
}> = async (ctx) => {
  let cookie = cookieLib.parse(ctx?.req.headers.cookie || "");

  const result = allMovies.filter((item) => {
    return item.title
      .toLowerCase()
      .includes(String(ctx.query?.s).toLowerCase());
  });

  console.log(ctx.query?.s);

  let user = null;

  if (cookie && cookie?.auth === "true") {
    user = "tomiez";
  }

  return {
    props: {
      user,
      data: result as MovieType[],
    },
  };
};

const ResultPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ResultContainer data={data}>
      <ResultPageView />
    </ResultContainer>
  );
};

ResultPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ResultPage;
