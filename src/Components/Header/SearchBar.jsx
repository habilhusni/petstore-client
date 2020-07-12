import React from "react";
import { Input, Col } from "antd";

const { Search } = Input;

const SearchBar = () => (
  <Col md={14} lg={16} xl={18}>
    <Search
      placeholder="Find the best for your pet"
      onSearch={(value) => console.log(value)}
      enterButton
      style={{ width: "100%" }}
    />
  </Col>
);

export default SearchBar;
