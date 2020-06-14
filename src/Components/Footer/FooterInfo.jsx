import React from "react";

const FooterInfo = (props) => {
  const {
    info: { title, list },
  } = props;

  return (
    <div className="info-wrapper">
      <h2 style={{ color: "#2579be" }}>{title}</h2>
      {list.map((li, i) => (
        <p key={`index-${i}`}>{li}</p>
      ))}
    </div>
  );
};

export default FooterInfo;
