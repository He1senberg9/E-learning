import { useState, useLayoutEffect } from "react";
import useDebounce from "./useDebounce";
type Size = {
  width: number;
  height: number;
};
const useWindowSize = () => {
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateSize = useDebounce(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 100);
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
export default useWindowSize;
