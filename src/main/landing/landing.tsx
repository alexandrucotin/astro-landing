import LabelValue from "../../components/atoms/label-value/label-value";
import TeamMembersList from "../../components/molecules/team-members-list/team-members-list";
import MainCTA from "../../components/atoms/main-cta/main-cta";
import LogoGif from "../../components/atoms/logo-gif/logo-gif";

const Landing: React.FC = () => {
  const openEmail = () => {
    window.open("mailto:hello@astrocollective.it?subject=Richiesta%20contatto");
  };
  return (
    <div className="landing">
      <div className="landing-about">
        <LabelValue label={"Vision"}>
          Creiamo con passione, comunicando con cuore.{" "}
        </LabelValue>
        <LabelValue label={"About"}>
          Siamo un collettivo composto da giovani amici appassionati di
          multimedia, comunicazione e design, che ha trasformato la propria
          passione in una professione avvincente, dando vita così ad Astro.
        </LabelValue>
        <LabelValue label={"Servizi"}>
          Offriamo consulenza di design e comunicazione per clienti provenienti
          da tutti i campi di interesse con particolare attenzione alla ricerca
          e alla creazione di progetti originali. Siamo specializzati in: Brand
          DesignEditorial DesignPackaging DesignSocial Media ManagementVideo
          productionMotion DesignPhotographyUX/UI DesignCMS and Platform Builds
        </LabelValue>
        <LabelValue label={"Mail"}>hello@astrocollective.it </LabelValue>
      </div>
      <div className="landing-team">
        <TeamMembersList />
      </div>

      <div className="landing-cta" onClick={openEmail}>
        <MainCTA />
      </div>
      <div className="landing-gif">
        <LogoGif />
      </div>
    </div>
  );
};

export default Landing;
