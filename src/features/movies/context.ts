import { MovieType } from "@/utils";
import { Dispatch, createContext, useContext } from "react";

type MovieResultContextType = {
  data: MovieType[] | null;
  setData: Dispatch<React.SetStateAction<MovieType[] | null>>;
  getResult?: ({ s }: { s?: string }) => Promise<void>;
};

export const MovieResultContext = createContext<MovieResultContextType>({
  data: [],
  setData: () => {},
});

export const useMovieResultCtx = () => useContext(MovieResultContext);
