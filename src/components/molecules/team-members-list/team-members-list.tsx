import React from "react";
import LabelValue from "../../atoms/label-value/label-value";
import TeamMember from "../../atoms/team-member/team-member";
import CV_COTIN from "../../../assets/cv/alex_cotin.pdf";
import CV_BATT from "../../../assets/cv/samuele_bat.pdf";
import CV_GHISE from "../../../assets/cv/emanuele_ghise.pdf";
import CV_LUONI from "../../../assets/cv/luca_luoni.pdf";

const TeamMembersList: React.FC = () => {
  return (
    <LabelValue label={"Team"}>
      <div className="team-members-list">
        <TeamMember
          name={"Federico Gotti"}
          partitaIva={"03701540167"}
          role={"Account Manager"}
          link={""}
        />
        <TeamMember
          name={"Luca Luoni"}
          partitaIva={"03882630126"}
          role={"Digital Designer"}
          link={CV_LUONI}
        />
        <TeamMember
          name={"Samuele Battistella"}
          partitaIva={"03817750122"}
          role={"Videomaker"}
          link={CV_BATT}
        />
        <TeamMember
          name={"Cotin Alexandru"}
          partitaIva={"05005780233"}
          role={"Web developer"}
          link={CV_COTIN}
        />
        <TeamMember
          name={"Emanuele Ghisellini"}
          partitaIva={"01603280296"}
          role={"Social Media Manager"}
          link={CV_GHISE}
        />
      </div>
    </LabelValue>
  );
};

export default TeamMembersList;
