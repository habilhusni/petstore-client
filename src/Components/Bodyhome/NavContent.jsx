import React, { Component } from "react";
import { Menu } from "antd";

export default class NavContent extends Component {
  state = {
    current: "Best Seller",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ textAlign: "center", marginBottom: 16 }}
        theme="light"
      >
        <Menu.Item
          key="Best Seller"
          style={{ color: "#2579be", fontWeight: "bold" }}
        >
          Best Seller
        </Menu.Item>
        <Menu.Item
          key="New Entry"
          style={{ color: "#2579be", fontWeight: "bold" }}
        >
          New Entry
        </Menu.Item>
      </Menu>
    );
  }
}
