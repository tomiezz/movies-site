import React, { memo } from "react";
import IconButton from "../buttons/IconButton";
import SearchIcon from "../svgs/SearchIcon";

const SearchBox = () => {
  return (
    <div className="flex items-center border-b border-current">
      <input
        type="search"
        placeholder="Movie name..."
        className="w-full   py-2 border-transparent focus:border-transparent focus:ring-0 outline-none"
      />
      <IconButton type="button" props={{}}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default memo(SearchBox);
