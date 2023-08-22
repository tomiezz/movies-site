import { useRouter } from "next/router";
import React, { useRef } from "react";

const useSearchPanel = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onSearch = () => {
    if (ref.current?.value) {
      router.query = {
        s: ref.current?.value,
      };
      router.push(router);
    }
  };
  return { ref, onSearch };
};

export default useSearchPanel;
