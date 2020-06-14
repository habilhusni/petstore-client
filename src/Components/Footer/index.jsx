import React, { Fragment } from "react";
import { Divider, Row, Col } from "antd";
import FooterInfo from "./FooterInfo";
import "./index.css";

const footerInfo1 = {
  title: "Follow our social media",
  list: ["Instagram: @husnihabil", "Facebook: husnihabil"],
};
const footerInfo2 = {
  title: "Information",
  list: ["About Us", "Contact Us", "Career"],
};
const footerInfo3 = {
  title: "Policies",
  list: ["Shopping & Returns", "Terms", "Privacy Policy"],
};
const footerInfo4 = {
  title: "Newsletter",
  list: [
    "Subscribe to receive updates, access to exclusive deals, and more.",
    "Email here",
    "Subscribe here",
  ],
};

const FooterWrapper = () => (
  <Fragment>
    <Divider />
    <Row gutter={16}>
      <Col span={8}>
        <FooterInfo info={footerInfo1} />
      </Col>
      <Col span={16}>
        <Row gutter={16}>
          <FooterInfo info={footerInfo2} />
          <FooterInfo info={footerInfo3} />
          <FooterInfo info={footerInfo4} />
        </Row>
      </Col>
    </Row>
  </Fragment>
);

export default FooterWrapper;
