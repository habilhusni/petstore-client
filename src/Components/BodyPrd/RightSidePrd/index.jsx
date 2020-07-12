import React, { lazy } from "react";
import { Col, Row, Rate } from "antd";
import "./index.css";

const CartCount = lazy(() => import("./FormCart"));

const RightSidePrd = () => (
  <Col span={12}>
    <Row className="detail-container">
      <Col span={24}>
        <Row className="data-container">
          <Col className="data" span={24}>
            <h2 className="category">Wellness</h2>
            <h1>Complete Health Path Chicken</h1>
            <Row className="values">
              <Rate disabled />
              <div className="value-stars">no-values</div>
            </Row>
            <span className="price">Rp 20.000</span>
          </Col>
        </Row>
        <CartCount />
      </Col>
    </Row>
  </Col>
);

export default RightSidePrd;
