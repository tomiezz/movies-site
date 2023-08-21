import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";
import CSS from "./main-layout.module.css";
import { Inter, Montserrat } from "next/font/google";
import clsx from "clsx";

const interFont = Inter({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });
type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={clsx(CSS.main, montserratFont.className)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
