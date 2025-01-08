import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewport, setViewport] = useState("mobile");

  useEffect(() => {
    const updateViewport = () => {
      if (windowWidth <= 768) {
        setViewport("mobile");
      } else if (windowWidth > 768 && windowWidth <= 1280) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    updateViewport();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [windowWidth]);

  return viewport;
};
