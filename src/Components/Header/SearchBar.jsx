import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => (
  <Search placeholder="Find the best for your pet" onSearch={value => console.log(value)} enterButton style={{ width: 500, margin: 'auto', marginLeft: 50 }} />
);

export default SearchBar;