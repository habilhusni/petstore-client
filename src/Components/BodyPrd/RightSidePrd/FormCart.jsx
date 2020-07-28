import React, { Component, lazy } from "react";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import actions from "../../../actions";
import "./index.css";

const Count = lazy(() => import("./Count"));
const DrawerCart = lazy(() => import("./DrawerCart"));

class CartCount extends Component {
  state = {};

  render() {
    const { drawer, handleDrawerCart } = this.props;

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
              onClick={() => handleDrawerCart(true)}
              block
            >
              ADD TO CART
            </Button>
          </Row>
          <DrawerCart
            onShowDrawer={handleDrawerCart}
            visibleDrawer={drawer.isDrawerOpen}
          />
        </Col>
      </Row>
    );
  }
}

CartCount.propTypes = {
  drawer: PropTypes.object,
  handleDrawerCart: PropTypes.func,
};

CartCount.defaultProps = {
  drawer: {},
  handleDrawerCart: () => {},
};

const mapStateToProps = (state) => ({
  drawer: state.drawer,
});

const mapDispatchToProps = (dispatch) => ({
  handleDrawerCart: (isDrawerOpen) =>
    dispatch(actions.handleDrawerCart(isDrawerOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCount);
