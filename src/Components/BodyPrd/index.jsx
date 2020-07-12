import React, { lazy } from "react";
import { Row } from "antd";

const LeftSidePrd = lazy(() => import("./LeftSidePrd"));
const RightSidePrd = lazy(() => import("./RightSidePrd"));

const BodyPrd = () => (
  <Row glutter={16} style={{ width: "90%", margin: "auto" }}>
    <LeftSidePrd />
    <RightSidePrd />
  </Row>
);

export default BodyPrd;
