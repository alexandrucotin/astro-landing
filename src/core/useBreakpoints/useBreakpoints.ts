import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const useBreakpoints = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("md");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newBreakpoint: Breakpoint;

      if (width < 576) {
        newBreakpoint = "xs";
      } else if (width < 768) {
        newBreakpoint = "sm";
      } else if (width < 992) {
        newBreakpoint = "md";
      } else if (width < 1200) {
        newBreakpoint = "lg";
      } else {
        newBreakpoint = "xl";
      }

      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return breakpoint;
};

export default useBreakpoints;
