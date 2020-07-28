import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { isAuthenticated, logout } from "../../helper/utils";

const LoginWrapper = (props) => (
  <Row gutter={16} align="middle" style={{ height: "100%", margin: 0 }}>
    <Col md={12} lg={12} xl={12} style={{ textAlign: "center" }}>
      {isAuthenticated() ? (
        <Link to="/signin" onClick={() => logout()} className="login">
          logout
        </Link>
      ) : (
        <Link to="/signin" className="login">
          login
        </Link>
      )}
    </Col>
    <Col md={12} lg={12} xl={12} style={{ textAlign: "center" }}>
      <div className="login" onClick={() => props.handleDrawerCart(true)}>
        cart (0)
      </div>
    </Col>
  </Row>
);

LoginWrapper.propTypes = {
  handleDrawerCart: PropTypes.func,
};

LoginWrapper.defaultProps = {
  handleDrawerCart: () => {},
};

export default LoginWrapper;
