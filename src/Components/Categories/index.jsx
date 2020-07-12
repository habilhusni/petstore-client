import React from "react";
import { Row, Col, Skeleton } from "antd";
import { isUndefinedOrNullOrEmpty } from "../../helper/utils";

const CategoriesWrapper = ({ data }) => {
  var parseData = [];

  if (data.payload && !isUndefinedOrNullOrEmpty(data.payload.data)) {
    parseData = data.payload.data;
  }

  const renderCategories = (data) =>
    data.map((parse, i) => (
      <Col key={`index-${i}`} xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}>
        <div
          style={{
            width: "auto",
            height: 700,
            backgroundImage: `url(${parse.Photos})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
      </Col>
    ));

  return (
    <Row gutter={16} style={{ padding: 30, margin: "auto", maxWidth: "90%" }}>
      <Skeleton
        loading={isUndefinedOrNullOrEmpty(parseData) || parseData.length === 0}
        active
        size="large"
      >
        <Col span={24}>
          <Row justify="center">
            <h2>Categories</h2>
          </Row>
          <Row gutter={[16, 16]}>{renderCategories(parseData)}</Row>
        </Col>
      </Skeleton>
    </Row>
  );
};

export default CategoriesWrapper;
