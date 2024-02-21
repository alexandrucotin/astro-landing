import React from "react";
import LabelValue from "../../atoms/label-value/label-value";
import TeamMember from "../../atoms/team-member/team-member";

const TeamMembersList: React.FC = () => {
  return (
    <LabelValue label={"Team"}>
      <div className="team-members-list">
        <TeamMember
          name={"Federico Gotti"}
          partitaIva={""}
          role={"Account Manager"}
          link={""}
        />
        <TeamMember
          name={"Luca Luoni"}
          partitaIva={""}
          role={"Digital Designer"}
          link={""}
        />
        <TeamMember
          name={"Samuele Battistella"}
          partitaIva={""}
          role={"Videomaker"}
          link={""}
        />
        <TeamMember
          name={"Cotin Alexandru"}
          partitaIva={""}
          role={"Web developer"}
          link={""}
        />
        <TeamMember
          name={"Emanuele Ghisellini"}
          partitaIva={""}
          role={"Social Media Manager"}
          link={""}
        />
      </div>
    </LabelValue>
  );
};

export default TeamMembersList;
