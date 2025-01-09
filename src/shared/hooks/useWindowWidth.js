import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [viewport, setViewport] = useState("mobile");

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setViewport("mobile");
      } else if (width <= 1280) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    window.addEventListener("resize", updateViewport);

    updateViewport();

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return viewport;
};
