import React from "react";
import AstroLogoAnimation from "../../../assets/logo.gif";

const LogoGif: React.FC = () => {
  return (
    <div className="logo-gif">
      <img src={AstroLogoAnimation} alt="Astro collective logo gif animation" />
    </div>
  );
};

export default LogoGif;
