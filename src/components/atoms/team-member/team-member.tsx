import React from "react";

type Props = {
  name: string;
  partitaIva: string;
  role: string;
  link: string;
};

const TeamMember: React.FC<Props> = ({ name, partitaIva, role, link }) => {
  return (
    <div className="team-member">
      <div className="team-member-name">{name}</div>
      <div className="team-member-role">{role}</div>
      <div className="team-member-partita-iva">Partita IVA: {partitaIva}</div>
      <div className="team-member-download-cv">
        <a href={link}>Download CV</a>
      </div>
    </div>
  );
};

export default TeamMember;
