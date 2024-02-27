import React from "react";
import useBreakpoints from "../../core/useBreakpoints/useBreakpoints";

const Footer: React.FC = () => {
  const breakpoints = useBreakpoints();

  return (
    <div className="footer">
      <div>© Astro Collective 2024 - All rights reservered</div>
      {(breakpoints === "xs" || breakpoints === "sm") && (
        <div>
          Collaborazione tra professionisti <br /> Busto Arsizio (VA)
        </div>
      )}
      {breakpoints !== "xs" && breakpoints !== "sm" && (
        <div>Collaborazione tra professionisti - Busto Arsizio (VA)</div>
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
