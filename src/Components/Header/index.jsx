import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchBar";
import LoginWrapper from "./LoginWrapper";
import actions from "../../actions";
import "./index.css";

const HeaderWrapper = (props) => (
  <Row className="header">
    <div className="header-wrapper">
      <Row className="top-header">
        <Col span={20}>
          <Row align="middle" style={{ height: "100%" }}>
            <LogoHeader title="Cihuy Pet Store" subtitle="Pet makes happy" />
            <SearchBar />
          </Row>
        </Col>
        <Col style={{ alignSelf: "center", height: "100%" }} span={4}>
          <LoginWrapper handleDrawerCart={props.handleDrawerCart} />
        </Col>
      </Row>
    </div>
  </Row>
);

HeaderWrapper.propTypes = {
  handleDrawerCart: PropTypes.func,
};

HeaderWrapper.defaultProps = {
  handleDrawerCart: () => {},
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleDrawerCart: (isDrawerOpen) =>
    dispatch(actions.handleDrawerCart(isDrawerOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
