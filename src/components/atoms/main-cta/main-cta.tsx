import ArrowImage from "../../../assets/arrow.png";
import useBreakpoints from "../../../core/useBreakpoints/useBreakpoints";

const MainCTA: React.FC = () => {
  const breakpoint = useBreakpoints();

  return (
    <div className="main-cta">
      {(breakpoint === "xs" || breakpoint === "sm") && (
        <div className="main-cta-button">contattaci</div>
      )}
      {breakpoint !== "xs" && breakpoint !== "sm" && (
        <>
          <span className="main-cta-text">
            Creiamo qualcosa di <br /> bello insieme
          </span>
          <div className="main-cta-arrow">
            <img src={ArrowImage} alt="Your Image" />
          </div>
        </>
      )}
    </div>
  );
};

export default MainCTA;
