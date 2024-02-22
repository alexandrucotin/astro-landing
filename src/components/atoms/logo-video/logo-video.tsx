import React from "react";
import AstroLogoAnimation from "../../../assets/astro-logo-animation.mp4";

type LogoVideoProps = {
  width?: string;
  height?: string;
};

const LogoVideo: React.FC<LogoVideoProps> = ({
  width = "100%",
  height = "100%",
}) => {
  return (
    <div className="logo-video">
      <video width={width} height={height} autoPlay loop playsInline>
        <source src={AstroLogoAnimation} type="video/mp4" />
      </video>
    </div>
  );
};

export default LogoVideo;
