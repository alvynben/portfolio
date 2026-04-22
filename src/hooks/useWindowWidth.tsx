import { useState, useEffect } from "react";

// Must match on both server and first client render to avoid hydration
// mismatches. We pick a desktop-ish default and let useEffect swap in the
// real viewport width after mount.
const SSR_DEFAULT_WIDTH = 1200;

export default function useWindowWidth() {
  const [width, setWidth] = useState<number>(SSR_DEFAULT_WIDTH);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width;
}
