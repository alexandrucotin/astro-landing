import React from "react";
import AstroLogoAnimation from "../../../assets/logo.gif";

const LogoGif: React.FC = () => {
  return (
    <div className="logo-gif">
      <img src={AstroLogoAnimation} />
    </div>
  );
};

export default LogoGif;
