import React, { Component, lazy } from "react";
import { Row, Col, Button } from "antd";
import "./index.css";

const Count = lazy(() => import("./Count"));
const DrawerCart = lazy(() => import("./DrawerCart"));

class CartCount extends Component {
  state = {
    totCount: 0,
    visibleDrawer: false,
  };

  handleVisibleDrawer = (bool) => {
    this.setState({
      visibleDrawer: bool,
    });
  };

  render() {
    return (
      <Row className="cart-container">
        <Col span={24}>
          <Row className="count-container">
            <Col span={24}>
              <Count large />
            </Col>
          </Row>
          <Row className="button-container">
            <Button
              type="primary"
              size="large"
              onClick={() => this.handleVisibleDrawer(true)}
              block
            >
              ADD TO CART
            </Button>
          </Row>
          <DrawerCart
            onShowDrawer={this.handleVisibleDrawer}
            visibleDrawer={this.state.visibleDrawer}
          />
        </Col>
      </Row>
    );
  }
}

export default CartCount;
