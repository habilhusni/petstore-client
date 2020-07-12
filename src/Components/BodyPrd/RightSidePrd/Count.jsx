import React, { Component } from "react";
import { Row, Input } from "antd";
import PropTypes from "prop-types";
import "./index.css";

class Count extends Component {
  state = {
    totCount: 0,
  };

  handleChangeCount = (e) => {
    if (isNaN(e.target.value)) {
      return 0;
    }

    this.setState({
      totCount: Number(e.target.value),
    });
  };

  handleIncCount = (type) => {
    if (this.state.totCount === 0 && type === "min") {
      return;
    }

    if (type === "min") {
      this.setState((prevState) => {
        return { totCount: prevState.totCount - 1 };
      });
    } else {
      this.setState((prevState) => {
        return { totCount: prevState.totCount + 1 };
      });
    }
  };

  render() {
    const { large } = this.props;

    return (
      <Row className={large ? "count" : "count-small"}>
        <div
          className={large ? "min" : "min-small"}
          onClick={() => this.handleIncCount("min")}
        >
          -
        </div>
        <Input
          className={large ? "input" : "input-small"}
          value={this.state.totCount}
          onChange={this.handleChangeCount}
        />
        <div
          className={large ? "plus" : "plus-small"}
          onClick={() => this.handleIncCount("plus")}
        >
          +
        </div>
      </Row>
    );
  }
}

Count.propTypes = {
  large: PropTypes.bool,
};

Count.defaultProps = {
  large: false,
};

export default Count;
