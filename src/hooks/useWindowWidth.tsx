import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState<number>(() =>
    typeof window === "undefined" ? 1200 : window.innerWidth
  );

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width;
}
