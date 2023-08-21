import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/utils";
import React, { ReactElement } from "react";

const DetailPage: NextPageWithLayout = () => {
  return <div>DetailPage</div>;
};

DetailPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default DetailPage;
