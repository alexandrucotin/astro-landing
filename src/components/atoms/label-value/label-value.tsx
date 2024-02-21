import React from "react";

type LabelValueProps = {
  label: string;
  children?: React.ReactNode;
};

const LabelValue: React.FC<LabelValueProps> = ({ label, children }) => {
  return (
    <div className="label-value">
      <div className="label-value-label">{label} </div>
      <div className="label-value-value">{children}</div>
    </div>
  );
};

export default LabelValue;
