import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/utils";
import React, { ReactElement } from "react";

const ResultPage: NextPageWithLayout = () => {
  return <div>ResultPage</div>;
};

ResultPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ResultPage;
