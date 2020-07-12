import React from "react";
import { Row, Col } from "antd";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchBar";
import LoginWrapper from "./LoginWrapper";
import "./index.css";

const HeaderWrapper = () => (
  <Row className="header">
    <div className="header-wrapper">
      <Row className="top-header">
        <Col span={20}>
          <Row align="middle" style={{ height: "100%" }}>
            <LogoHeader title="Cihuy Pet Store" subtitle="Pet makes happy" />
            <SearchBar />
          </Row>
        </Col>
        <Col style={{ alignSelf: "center", height: "100%" }} span={4}>
          <LoginWrapper />
        </Col>
      </Row>
    </div>
  </Row>
);

export default HeaderWrapper;
