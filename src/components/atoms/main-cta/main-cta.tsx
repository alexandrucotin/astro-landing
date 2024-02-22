import ArrowImage from "../../../assets/arrow.png";
import useBreakpoints from "../../../core/useBreakpoints/useBreakpoints";

const MainCTA: React.FC = () => {
  const breakpoint = useBreakpoints();

  const openEmail = () => {
    window.open("mailto:hello@astrocollective.it?subject=Richiesta%20contatto");
  };

  return (
    <div className="main-cta" onClick={openEmail}>
      {(breakpoint === "xs" || breakpoint === "sm") && (
        <div className="main-cta-button">contattaci</div>
      )}
      {breakpoint !== "xs" && breakpoint !== "sm" && (
        <>
          <span className="main-cta-text">
            Creiamo qualcosa di bello insieme
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
