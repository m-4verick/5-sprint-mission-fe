import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [viewport, setViewport] = useState("mobile");

  useEffect(() => {
    let timeoutId;

    const updateViewport = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width <= 768) {
          setViewport("mobile");
        } else if (width <= 1280) {
          setViewport("tablet");
        } else {
          setViewport("desktop");
        }
      }, 100);
    };

    window.addEventListener("resize", updateViewport);

    updateViewport();

    return () => {
      window.removeEventListener("resize", updateViewport);
      clearTimeout(timeoutId);
    };
  }, []);

  return viewport;
};
