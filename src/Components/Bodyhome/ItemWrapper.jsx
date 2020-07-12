import React from "react";
import { Card, Row, Col } from "antd";
import { isUndefinedOrNullOrEmpty } from "../../helper/utils";
import { Skeleton } from "antd";

const { Meta } = Card;

const ItemWrapper = (props) => {
  var parseData = [];
  var bestSellerData = [];
  var newEntryData = [];

  const isCategory = (ctgArr, type) => {
    if (ctgArr.length === 0) {
      return false;
    }
    var arrFound = [];
    arrFound = ctgArr.filter((ctg) => ctg.Name === type);
    if (arrFound.length > 0) {
      return true;
    }
    return false;
  };

  const filterData = (arrData, type) =>
    arrData.filter((data) => isCategory(data.Categories, type));

  if (
    props.data.payload &&
    !isUndefinedOrNullOrEmpty(props.data.payload.data)
  ) {
    parseData = props.data.payload.data;
    bestSellerData = filterData(parseData, "Best Sellers");
    newEntryData = filterData(parseData, "New Entry");
  }

  const renderItem = (prd, i) => (
    <Col
      key={`item - ${i}`}
      className="col-item"
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={6}
      xxl={6}
    >
      <Card
        className="card-item"
        hoverable
        cover={
          <div
            style={{
              width: "auto",
              height: 250,
              backgroundImage: `url(${prd.Pictures[0]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }}
          />
        }
      >
        <Meta title={prd.Name} description={prd.Description} />
      </Card>
    </Col>
  );

  const renderItemWrapper = (view) => {
    switch (view) {
      case "Best Seller":
        return (
          <Row gutter={[16, 16]} style={{ margin: 0 }}>
            {bestSellerData.map((prd, i) => i < 16 && renderItem(prd, i))}
          </Row>
        );
      case "New Entry":
        return (
          <Row gutter={[16, 16]} style={{ margin: 0 }}>
            {newEntryData.map((prd, i) => i < 16 && renderItem(prd, i))}
          </Row>
        );
      default:
        return null;
    }
  };

  return (
    <Skeleton
      loading={isUndefinedOrNullOrEmpty(parseData) || parseData.length === 0}
      active
      size="large"
    >
      {renderItemWrapper(props.view)}
    </Skeleton>
  );
};

export default ItemWrapper;
