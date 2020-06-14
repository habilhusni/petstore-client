import React from "react";
import IconMoney from "../../assets/money.svg";

const LogoHeader = (props) => (
  <div className="logo-wrapper">
    <img src={IconMoney} alt="website logo" className="img-logo" />
    <div className="title-wrapper">
      <h2 className="title">{props.title}</h2>
      <h3 className="title">{props.subtitle}</h3>
    </div>
  </div>
);

export default LogoHeader;
