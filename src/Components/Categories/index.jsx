import React from "react";
import { Row, Col } from "antd";
import category1 from "../../assets/categories/category-1.jpg";
import category2 from "../../assets/categories/category-2.jpg";
import category3 from "../../assets/categories/category-3.jpg";

const CategoriesWrapper = () => (
  <div style={{ padding: 30, margin: "auto", maxWidth: "90%" }}>
    <Row gutter={16}>
      <Col span={8}>
        <div
          style={{
            width: "auto",
            height: 700,
            backgroundImage: `url(${category1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
      </Col>
      <Col span={8}>
        <div
          style={{
            width: "auto",
            height: 700,
            backgroundImage: `url(${category2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
      </Col>
      <Col span={8}>
        <div
          style={{
            width: "auto",
            height: 700,
            backgroundImage: `url(${category3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
      </Col>
    </Row>
  </div>
);

export default CategoriesWrapper;
