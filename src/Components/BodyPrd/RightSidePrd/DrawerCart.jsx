import React, { Component, lazy } from "react";
import { Drawer, Button, Row, Col } from "antd";
import "./index.css";

import img from "../../../assets/body-image/dog-1.jpg";

const Count = lazy(() => import("./Count"));

class DrawerCart extends Component {
  renderFooter = () => (
    <div
      style={{
        textAlign: "right",
      }}
    >
      <Button onClick={() => this.props.onShowDrawer(false)} type="primary">
        Checkout
      </Button>
    </div>
  );

  render() {
    return (
      <Drawer
        title="Cart"
        placement="right"
        onClose={() => this.props.onShowDrawer(false)}
        visible={this.props.visibleDrawer}
        width={500}
        footer={this.renderFooter()}
      >
        <Row className="content-cart">
          <Col span={12}>
            <div
              style={{
                width: 150,
                height: 150,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                margin: "auto",
              }}
            />
          </Col>
          <Col span={12}>
            <Row className="cart-detail">
              <Col className="cart-data" span={24}>
                <h2 style={{ fontSize: 11, marginBottom: 5 }}>
                  Complete Health Path Chicken
                </h2>
                <span>Rp 20.000</span>
              </Col>
            </Row>
            <Row className="cart-count" justify="space-between">
              <Col className="count-step" span={12}>
                <Count />
              </Col>
              <Col className="remove" span={12}>
                <span>remove</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Drawer>
    );
  }
}

export default DrawerCart;
