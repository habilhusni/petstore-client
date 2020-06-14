import React from "react";
import { Card, Row, Col } from "antd";

import dog1 from "../../assets/body-image/dog-1.jpg";
import dog2 from "../../assets/body-image/dog-2.jpg";
import dog3 from "../../assets/body-image/dog-3.jpg";
import dog4 from "../../assets/body-image/dog-4.jpg";

const arrDogItem = [
  dog1,
  dog2,
  dog3,
  dog4,
  dog1,
  dog2,
  dog3,
  dog4,
  dog1,
  dog2,
  dog3,
  dog4,
  dog1,
  dog2,
  dog3,
  dog4,
  dog1,
  dog2,
  dog3,
  dog4,
];

const { Meta } = Card;

const ItemWrapper = () => (
  <Row gutter={16}>
    {arrDogItem.map((dog, i) => {
      if (i < 16) {
        return (
          <Col key={`item - ${i}`} className="col-item" span={6}>
            <Card
              className="card-item"
              hoverable
              cover={
                <div
                  style={{
                    width: "auto",
                    height: 250,
                    backgroundImage: `url(${dog})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                  }}
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        );
      }
      return null;
    })}
  </Row>
);

export default ItemWrapper;
