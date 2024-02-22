import React from "react";
import LabelValue from "../../atoms/label-value/label-value";
import TeamMember from "../../atoms/team-member/team-member";
import CV_COTIN from "../../../assets/Cotin_Alexandru_CV.pdf";

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
          link={""}
        />
        <TeamMember
          name={"Samuele Battistella"}
          partitaIva={"03817750122"}
          role={"Videomaker"}
          link={""}
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
          link={""}
        />
      </div>
    </LabelValue>
  );
};

export default TeamMembersList;
