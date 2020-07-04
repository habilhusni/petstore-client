import React, { Component } from "react";
import "./index.css";
import ItemWrapper from "./ItemWrapper";
import TitleBody from "./TitleBody";
import NavContent from "./NavContent";

class BodyhomeWrapper extends Component {
  state = {
    view: "Best Seller",
  };

  handleSwitchNav = (view) => {
    this.setState({
      view,
    });
  };

  render() {
    const { data } = this.props;

    return (
      <div className="body-home-wrapper">
        <TitleBody />
        <NavContent handleSwitchNav={this.handleSwitchNav} />
        <ItemWrapper data={data} view={this.state.view} />
      </div>
    );
  }
}

export default BodyhomeWrapper;
