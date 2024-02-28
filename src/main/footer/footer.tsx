import React from "react";
import useBreakpoints from "../../core/useBreakpoints/useBreakpoints";

const Footer: React.FC = () => {
  const breakpoints = useBreakpoints();

  return (
    <div className="footer">
      <p>© Astro Collective 2024 - All rights reservered</p>
      {(breakpoints === "xs" || breakpoints === "sm") && (
        <p>
          Collaborazione tra professionisti <br /> Busto Arsizio (VA)
        </p>
      )}
      {breakpoints !== "xs" && breakpoints !== "sm" && (
        <p>Collaborazione tra professionisti - Busto Arsizio (VA)</p>
      )}
      <div className="footer-links">
        <a href="">Privacy policy</a>
        <a href="">Cookie policy</a>
        <a href="">Termini e condizioni</a>
      </div>
    </div>
  );
};

export default Footer;
