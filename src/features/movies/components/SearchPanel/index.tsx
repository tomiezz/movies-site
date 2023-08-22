import SearchBox from "@/components/SearchBox";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import useSearchPanel from "../../useSearchPanel";

export const SearchPanelDesktop = () => {
  const { ref, onSearch } = useSearchPanel();

  return (
    <aside className="py-2 flex-1  hidden md:block max-w-[300px] ">
      <div className="border p-4 border-current">
        <SearchBox ref={ref} onSearch={onSearch} />
        {/* <div>Genres</div>
<div>Sort</div> */}
      </div>
    </aside>
  );
};

export const SearchPanelMobile = () => {
  const { ref, onSearch } = useSearchPanel();

  return (
    <aside className="md:hidden ">
      <SearchBox ref={ref} onSearch={onSearch} />
    </aside>
  );
};
