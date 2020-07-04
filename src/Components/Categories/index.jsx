import React from "react";
import { Row, Col, Skeleton } from "antd";
import { isUndefinedOrNullOrEmpty } from "../../helper/utils";

const CategoriesWrapper = ({ data }) => {
  var parseData = [];

  if (!isUndefinedOrNullOrEmpty(data.payload.data)) {
    parseData = data.payload.data;
  }

  return (
    <div style={{ padding: 30, margin: "auto", maxWidth: "90%" }}>
      <Row gutter={16}>
        <Skeleton
          loading={
            isUndefinedOrNullOrEmpty(parseData) || parseData.length === 0
          }
          active
          size="large"
        >
          {parseData.map(
            (parse, i) =>
              i < 3 && (
                <Col key={`index-${i}`} span={8}>
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
              )
          )}
        </Skeleton>
      </Row>
    </div>
  );
};

export default CategoriesWrapper;
