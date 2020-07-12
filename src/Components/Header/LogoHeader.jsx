import React from "react";
import { Row, Col } from "antd";
import IconMoney from "../../assets/money.svg";

const LogoHeader = (props) => (
  <Col md={10} lg={8} xl={6} className="logo-wrapper">
    <Row>
      <img src={IconMoney} alt="website logo" className="img-logo" />
      <div className="title-wrapper">
        <h2 className="title">{props.title}</h2>
        <h3 className="title">{props.subtitle}</h3>
      </div>
    </Row>
  </Col>
);

export default LogoHeader;
