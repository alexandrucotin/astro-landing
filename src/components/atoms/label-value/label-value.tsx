import React from "react";

type LabelValueProps = {
  label: string;
  type?: "text" | "child";
  children?: React.ReactNode;
};

const LabelValue: React.FC<LabelValueProps> = ({
  label,
  type = "text",
  children,
}) => {
  return (
    <div className="label-value">
      <p className="label-value-label">{label} </p>
      {type === "text" && <p className="label-value-value">{children}</p>}
      {type === "child" && <div className="label-value-value">{children}</div>}
    </div>
  );
};

export default LabelValue;
