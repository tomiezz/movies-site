import React, { ComponentPropsWithRef, forwardRef, memo } from "react";
import IconButton from "../buttons/IconButton";
import SearchIcon from "../svgs/SearchIcon";

type Props = {
  onSearch?: () => void;
} & ComponentPropsWithRef<"input">;

const SearchBox = forwardRef<HTMLInputElement, Props>(
  ({ onSearch, ...inputProps }, ref) => {
    return (
      <div className="flex items-center border-b border-current">
        <input
          ref={ref}
          type="search"
          placeholder="Movie name..."
          className="w-full   py-2 border-transparent focus:border-transparent focus:ring-0 outline-none"
          {...inputProps}
        />
        <IconButton type="button" props={{ onClick: onSearch }}>
          <SearchIcon />
        </IconButton>
      </div>
    );
  }
);

SearchBox.displayName = "SearchBox";

export default memo(SearchBox);
