import React, { ReactNode, useEffect, useState } from "react";
import { MovieResultContext } from "./context";
import { MovieType } from "@/utils";
import SearchResultSection from "./components/ResultSection";
import {
  SearchPanelDesktop,
  SearchPanelMobile,
} from "./components/SearchPanel";
import { useRouter } from "next/router";
import { fetchMovies } from "./services";

type Props = {
  data?: MovieType[] | null;
  children?: ReactNode;
};
const ResultContainer = ({ data: serverData, children }: Props) => {
  const [result, setResult] = useState<MovieType[] | null>(null);
  const router = useRouter();

  const getResult = async ({ s }: { s?: string }) => {
    try {
      const res = await fetchMovies({ s });
      setResult(res.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (router.query) {
      getResult({
        s: router.query.s as string,
      });
    }
  }, [router.query]);

  return (
    <MovieResultContext.Provider
      value={{
        data: result || serverData || [],
        setData: setResult,
        getResult,
      }}
    >
      {children}
    </MovieResultContext.Provider>
  );
};

ResultContainer.SearchDesktop = SearchPanelDesktop;
ResultContainer.SearchMobile = SearchPanelMobile;

ResultContainer.Result = SearchResultSection;
export default ResultContainer;
