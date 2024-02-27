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
      <div className="team-member-partita-iva">P.IVA: {partitaIva}</div>
      <div className="team-member-download-cv">
        <a
          href={link}
          download={`CV_${name.replace(/ /g, "_")}-${role.replace(/ /g, "_")}`}
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
