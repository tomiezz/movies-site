import React from "react";
import { useMovieResultCtx } from "../../context";
import MovieCard from "@/components/MovieCard";
import { APP_ROUTES, resolveMovieImg } from "@/utils";

const SearchResultSection = () => {
  const { data } = useMovieResultCtx();

  return data && data.length ? (
    data.map((item, idx) => (
      <div key={idx} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
        <MovieCard
          key={item.id}
          title={item.title}
          descripttion={item.overview}
          href={`${APP_ROUTES.DETAIL}/${item.id}`}
          imgUrl={resolveMovieImg(item.backdrop_path)}
        />
      </div>
    ))
  ) : (
    <h2 className="text-center w-full font-medium py-2">No item</h2>
  );
};

export default SearchResultSection;
