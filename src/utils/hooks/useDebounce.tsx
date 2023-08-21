import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, wait = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, wait);
    return () => clearTimeout(timer); // cleanup when unmounted
  }, [value, wait]);

  return debounceValue;
}
